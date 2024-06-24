import {component$, useSignal, useStore} from "@builder.io/qwik";
import {ChevronLeft, ChevronRight, PlayIcon} from "~/icons";

export default component$(() => {

    const heightTest = useSignal(100);
    const contentAlignment = useSignal("center");
    const marginBottom = useSignal(0);

    return (
        <div class="flex items-center flex-col gap-[8px] p-[8px] bg-default-bg rounded-lg transition-all duration-300 ease-out"
             style={{minHeight: heightTest.value, justifyContent: contentAlignment.value}}>
            <span>
                <h3 class="text-[1.6rem] cursor-pointer hover:text-default-hover-color"
                    onclick$={() => {if (window.innerHeight > 640) heightTest.value = 300; contentAlignment.value = "end"; marginBottom.value = 5}}>Song Name</h3>
            </span>
            <div class="flex justify-center gap-[8px]" style={{marginBottom: marginBottom.value}}>
                <ChevronLeft size={2.5} class="cursor-pointer hover:text-default-hover-color"/>
                <PlayIcon size={2.5} class="cursor-pointer hover:text-default-hover-color"/>
                <ChevronRight size={2.5} class="ml-[4px] cursor-pointer hover:text-default-hover-color"/>
            </div>
        </div>
    );
})