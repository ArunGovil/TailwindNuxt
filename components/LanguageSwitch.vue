<script setup lang="ts">
const showMenu = ref(false);
const language = ref("EN");
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
const switchLang = (lang: string) => {
  lang == "ES" ? (language.value = "ES") : (language.value = "EN");
  toggleMenu();
};
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <label id="listbox-label" class="sr-only"> Change published status </label>
    <div class="relative">
      <div class="inline-flex shadow-sm rounded-md">
        <div class="relative z-0 inline-flex shadow-sm rounded-md">
          <div
            class="
              relative
              inline-flex
              items-center
              bg-white
              border border-transparent
              rounded-l-md
              text-gray-700
            "
          >
            <!-- Flag icon here -->

            <p class="ml-2.5 text-sm font-medium">{{ language }}</p>
          </div>
          <button
            @click="toggleMenu"
            type="button"
            class="
              relative
              inline-flex
              items-center
              bg-white
              pl-2.5
              rounded-l-none rounded-r-md
              text-sm
              font-medium
              text-white
            "
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
            <span class="sr-only">Change published status</span>
            <!-- Heroicon name: solid/chevron-down -->
            <svg
              class="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <ul
        v-if="showMenu"
        class="
          origin-top-right
          absolute
          z-10
          right-0
          mt-2
          w-36
          rounded-md
          shadow-lg
          overflow-hidden
          bg-white
          divide-y divide-gray-200
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-0"
      >
        <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "text-white bg-indigo-500", Not Highlighted: "text-gray-900"
      -->

        <NuxtLink
          :to="switchLocalePath('en')"
          @click="switchLang('EN')"
          class="text-gray-900 select-none relative p-4 text-sm cursor-pointer"
          id="listbox-option-0"
          role="option"
        >
          <div class="flex flex-col">
            <div class="flex justify-between">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <p :class="[language == 'EN' ? 'font-semibold' : 'font-normal']">
                English
              </p>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink
          :to="switchLocalePath('es')"
          @click="switchLang('ES')"
          class="text-gray-900 select-none relative p-4 text-sm cursor-pointer"
          id="listbox-option-0"
          role="option"
        >
          <div class="flex flex-col">
            <div class="flex justify-between">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <p :class="[language == 'ES' ? 'font-semibold' : 'font-normal']">
                Spanish
              </p>
            </div>
          </div>
        </NuxtLink>

        <!-- More items... -->
      </ul>
    </div>
  </div>
</template>