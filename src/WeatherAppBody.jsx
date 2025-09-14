import WeatherActions from "./WeatherActions";

export default function WeatherAppBody() {
  return (
    <>
      <div className="text-preset-2 text-center py-[64px]">How's the sky looking today?</div>
      <WeatherActions />
    </>
  );
}
