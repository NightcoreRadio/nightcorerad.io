import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import LeftSidebar from "~/components/Sidebar/LeftSidebar";
import PlayerSlider from "~/components/Player/PlayerSlider";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
        <body lang="en" class="flex h-[100vh] max-h-[100vh] gap-[8px]">
            <LeftSidebar/>
            <div class="flex flex-col gap-[8px] h-full w-full">
                <RouterOutlet/>
                <PlayerSlider />
            </div>
        </body>
    </QwikCityProvider>
  );
});
