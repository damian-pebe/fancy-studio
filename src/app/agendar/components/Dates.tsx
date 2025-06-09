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
import { TimePicker } from "antd";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/Environment/urls";

export default function Dates() {
  const format = "HH:mm";

  const [date, setDate] = React.useState<Dayjs | null>(dayjs().add(1, "day"));
  const [selectedTime, setSelectedTime] = React.useState<dayjs.Dayjs>(dayjs("08:00", "HH:mm"));
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = async () => {
    const safeData = 
    {
      amount: 100,
      currency: "MXN",
      status: "pending",
      phone: phone,
      email: email,
      selected_day: date,
      selected_time: selectedTime,
    };
    const response = await fetch(`${BASE_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(safeData)
    });
    const data = await response.json();
    // console.log(data.url)
    window.open(data.url, "_blank");
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

        <AlertDialogContent className="bg-[#ffffff47] border border-white m-5">
          <AlertDialogHeader className="pb-10 md:pb-3">
            <AlertDialogTitle className="text-white font-careny text-center text-3xl ">
              <p className="animate-flipInY transition-all duration-1000">
                SELECCIONA LA HORA DE TU CITA <br />
              </p>
              <p className="font-birthstone tracking-widest font-light text-2xl animate-rotateIn transition-all duration-1000">
                Para el dia {date!.format("DD-MM-YYYY")}
              </p>
            </AlertDialogTitle>

            <div className="flex flex-col justify-center items-center gap-3">
              <div className="text-white grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>
              <div className="text-white grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="telefono">Telefono</Label>
              <Input
                type="tel"
                id="telefono"
                placeholder="Telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              </div>
              <TimePicker
              className="w-20"
              defaultValue={dayjs("8:00", format)}
              format={format}
              size="large"
              minuteStep={30}
              value={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              disabledTime={() => ({
                disabledHours: () => [
                ...Array(8).keys(),
                ...Array(16)
                  .keys()
                  .map((x) => x + 20),
                ],
                disabledMinutes: () => [],
              })}
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="font-poppins text-3xl">
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleBooking}>
              Agendar Cita
            </AlertDialogAction>
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
