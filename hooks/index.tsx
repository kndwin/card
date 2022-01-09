import { useState, useEffect } from "react";
import useSWR, { Fetcher } from "swr";

const LOCATION_URL = "https://ipapi.co/json/";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition({
      x: ev.clientX - window.innerWidth / 2,
      y: ev.clientY - window.innerHeight / 2,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useLocation = () => {
  const { data, error } = useSWR(LOCATION_URL, fetcher);
  return { error, city: data?.city };
};
