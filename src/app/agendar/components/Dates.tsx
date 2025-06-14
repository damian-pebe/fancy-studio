"use client";

import * as React from "react";
import { motion, Transition } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import ShinyText from "./ShinyText";
import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(timezone);
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/Environment/urls";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function Dates() {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs().add(1, "day"));
  const [selectedTime, setSelectedTime] = React.useState<Dayjs>(
    dayjs().hour(8).minute(0)
  );
  const [showWarning, setShowWarning] = useState(true);
  const [restrictedSlots, setRestrictedSlots] = useState<
    Array<{ date: string; hours: number[] }>
  >([]);

  useEffect(() => {
    const fetchRestrictedSlots = async () => {
      try {
        const response = await fetch(`${BASE_URL}/booked-times`);
        const data = await response.json();

        if (data && typeof data.data === "object") {
          const formatted = Object.entries(data.data).map(([date, hours]) => ({
            date,
            hours: hours as number[],
          }));

          setRestrictedSlots(formatted);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching restricted slots:", error);
      }
    };

    fetchRestrictedSlots();
  }, []);

  type BookingFormValues = z.infer<typeof BookingSchema>;

  const BookingSchema = z.object({
    email: z.string().email({ message: "Correo inválido" }),
    phone: z
      .string()
      .min(10, { message: "Teléfono debe tener al menos 10 dígitos" })
      .max(15, { message: "Teléfono demasiado largo" }),
  });

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  const handleBooking = async (data: z.infer<typeof BookingSchema>) => {
    if (!selectedTime) {
      setShowWarning(true);
      return;
    }

    const safeData = {
      amount: 100,
      currency: "MXN",
      status: "pending",
      phone: data.phone,
      email: data.email,
      selected_day: date!.format("YYYY-MM-DD"),
      selected_time: selectedTime.format("hh:mm A"),
    };

    const response = await fetch(`${BASE_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(safeData),
    });

    const resData = await response.json();
    window.open(resData.url, "_blank");
  };

  return (
    <div className="w-full h-full flex flex-col mt-20 md:mt-0 md:justify-center flex-wrap items-center gap-2 @md:flex-row ">
      <div className="flex flex-col text-center w-full">
        <BlurText
          text="Agendar Cita en Fancy Studio"
          className="flex justify-center items-center text-5xl tracking-wide sm:text-4xl md:text-7xl font-careny text-white text-center w-full mb-4"
        />
      </div>

      <div className="bg-white/50 rounded-lg">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={date}
            onChange={(date) => setDate(date)}
            defaultValue={dayjs().add(1, "day")}
            shouldDisableDate={(date) => {
              return date.isBefore(dayjs());
            }}
          />
        </LocalizationProvider>
      </div>

      <BlurText
        text={date ? date.format("DD-MM-YYYY") : ""}
        animateBy="letters"
        delay={100}
        className="flex justify-center items-center text-3xl tracking-widest font-birthstone text-white text-center w-full my-1"
      />

      <AlertDialog>
        <AlertDialogTrigger className="border border-white/60 hover:bg-[#11111132] bg-[#222222c6] rounded-full px-8 p-4 transition-all duration-1000">
          <ShinyText
            text="Confirmar Dia de Cita"
            disabled={false}
            speed={5}
            className="custom-class  tracking-widest font-plaster text-white/60"
          />
        </AlertDialogTrigger>

        <AlertDialogContent className="bg-[#ffffff81] border border-white">
          <AlertDialogHeader className="pb-10 md:pb-3">
            <AlertDialogTitle className="text-white font-careny text-center  ">
              <p className="text-lg md:text-3xl animate-flipInY transition-all duration-1000">
                SELECCIONA LA HORA DE TU CITA <br />
              </p>
              <p className="md:block hidden font-birthstone tracking-widest font-light text-base md:text-2xl animate-rotateIn transition-all duration-1000">
                Para el dia {date!.format("DD-MM-YYYY")}
              </p>
            </AlertDialogTitle>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleBooking)}
                className="space-y-2 text-xs"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="px-10">
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="px-10">
                      <FormControl>
                        <Input placeholder="Teléfono" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className=" bg-white/80 rounded-lg">
                  <p className="hidden md:block text-xl md:text-4xl font-ephesis tracking-widest text-center text-black pt-4">
                    Horario
                  </p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeClock
                     sx={{ transform: "scale(1)", transformOrigin: "top center" }}
                      value={selectedTime}
                      onChange={(newTime) => {
                        if (newTime) {
                          const formattedTime = newTime.format("HH:00");
                          setSelectedTime(dayjs(formattedTime, "HH:mm"));
                          setShowWarning(false);
                        }
                      }}
                      minTime={dayjs().hour(7).minute(0)}
                      maxTime={dayjs().hour(18).minute(0)}
                      ampm={false}
                      views={["hours"]}
                      shouldDisableTime={(time) => {
                        if (!date) return false;

                        const formattedSelectedDate =
                          dayjs(date).format("YYYY-MM-DD");

                        const dateRestriction = restrictedSlots.find(
                          (slot) => slot.date === formattedSelectedDate
                        );

                        return (
                          dateRestriction?.hours.includes(time.hour()) ?? false
                        );
                      }}
                    />
                  </LocalizationProvider>
                  {showWarning && (
                    <p className="text-red-500 text-sm mt-2 text-center">
                      Por favor selecciona una hora.
                    </p>
                  )}
                  <p className="hidden md:block text-xs md:text-lg font-poppins tracking-widest text-center w-full text-black pt-4">
                    Seleccionado: {selectedTime.format("hh:mm A")}
                  </p>
                  <p className="md:hidden block text-xs md:text-lg font-poppins tracking-widest text-center w-full text-black pt-4">
                    {selectedTime.format("hh:mm A")}
                  </p>
                </div>
                 <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={form.handleSubmit(handleBooking)}>
              Agendar Cita
            </AlertDialogAction>
              </form>
            </Form>
          </AlertDialogHeader>
          <AlertDialogFooter className="font-poppins text-3xl">
           
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 100,
  className = "",
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.3,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};
