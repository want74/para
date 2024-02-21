import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-[30vh]">
      <h1 className="text-3xl font-bold">Дииииикккккооо извиняюсь</h1>
      <p className="my-12 text-xl font-normal text-black opacity-60">По всей видимости случилась какая-то ошибка, а конкретно:</p>
      <p className="text-2xl  text-red-500 font-medium">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}