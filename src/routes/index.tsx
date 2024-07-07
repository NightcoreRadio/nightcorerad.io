import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
      <main class="h-full w-full bg-default-bg rounded-lg p-[10px]">

        <div class="w-full h-[300px] rounded-lg p-[10px] flex flex-col gap-[20px]">
            <h2 class="text-[2rem] ml-[20px]">Most Popular</h2>
            <div class="flex gap-[10px]">
            <div class=" w-[160px] h-[200px] flex flex-col gap-[10px] p-[10px]">
                <div class="bg-[violet] h-[90px]"></div>
                <h3 class="text-[1.3rem]">Song Name</h3>
                <h4 class="text-[1rem] opacity-80">Artist</h4>
            </div>
            <div class=" w-[160px] h-[200px] flex flex-col gap-[10px] p-[10px]">
                <div class="bg-[violet] h-[90px]"></div>
                <h3 class="text-[1.3rem]">Song Name</h3>
                <h4 class="text-[1rem] opacity-80">Artist</h4>
            </div>
            <div class=" w-[160px] h-[200px] flex flex-col gap-[10px] p-[10px]">
                <div class="bg-[violet] h-[90px]"></div>
                <h3 class="text-[1.3rem]">Song Name</h3>
                <h4 class="text-[1rem] opacity-80">Artist</h4>
            </div>
            <div class=" w-[160px] h-[200px] flex flex-col gap-[10px] p-[10px]">
                <div class="bg-[violet] h-[90px]"></div>
                <h3 class="text-[1.3rem]">Song Name</h3>
                <h4 class="text-[1rem] opacity-80">Artist</h4>
            </div>
            </div>
        </div>

      </main>
  );
});