<template>
	<div class="w-full flex gap-2 items-center drop-shadow-MQ z-50">
		<i v-if="icon" :class="'text-BN_BACKGROUND2 fa-solid fa-' + icon + ' text-xl mb-4'"></i>
		<div class="relative w-full mb-6 group z-50">
			<Field type="text" :name="label" :rules="rules" v-slot="{ field, errorMessage }" v-model="value">
				<input
					v-bind="field"
					@focusout="!focus ? (show = false) : ''"
					@click="show = true"
					:placeholder="value"
					readonly
					class="block py-2.5 px-0 w-full text-sm bg-transparent appearance-none focus:outline-none focus:ring-0 peer caret-transparent cursor-pointer"
					:class="errorMessage ? 'text-BN_PRIMARY' : 'text-BN_BACKGROUND2'" />

				<div
					class="h-[0.25px] w-full rounded-full absolute transition-all duration-300 -mt-0.5"
					:class="errorMessage ? 'bg-BN_PRIMARY' : 'peer-hover:bg-opacity-70 bg-BN_BACKGROUND2 bg-opacity-40 peer-focus:bg-BN_BACKGROUND2 peer-focus:hover:bg-BN_BACKGROUND2'"></div>
				<div
					class="h-0.5 rounded-full absolute transition-all duration-300 w-0 peer-focus:w-full -mt-0.5"
					:class="errorMessage ? 'bg-BN_PRIMARY' : 'peer-hover:bg-opacity-70 bg-BN_BACKGROUND2 bg-opacity-40 peer-focus:bg-BN_BACKGROUND2 peer-focus:hover:bg-BN_BACKGROUND2'"></div>

				<svg
					class="w-4 h-4 absolute top-4 right-0 text-BN_BACKGROUND2 text-opacity-60 peer-focus:text-BN_BACKGROUND2 transition-all duration-300 cursor-pointer -z-10"
					:class="show ? '-scale-100' : ''"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
				</svg>

				<ErrorMessage class="absolute text-xs text-BN_PRIMARY mt-1" :name="label" />

				<label
					v-if="value == '' && !focus"
					class="peer-focus:font-medium absolute text-sm transition-all duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					:class="errorMessage ? 'peer-focus:text-BN_PRIMARY text-BN_PRIMARY' : 'peer-focus:text-BN_BACKGROUND2 text-BN_BACKGROUND2 text-opacity-60'">
					{{ label }}
				</label>
				<label
					v-else
					class="peer-focus:font-medium absolute text-BN_BACKGROUND2 text-opacity-60 peer-focus:text-BN_BACKGROUND2 text-sm transform top-3 transition-all duration-300 -z-10 origin-[0] left-0 placeholder-shown:scale-100 placeholder-shown:translate-y-0 scale-75 -translate-y-6">
					{{ label }}
				</label>

				<div
					@mouseleave="focus = false"
					@mouseenter="focus = true"
					:class="show ? 'h-fit max-h-64 opacity-100' : 'h-0 opacity-0'"
					class="w-full mt-4 | bg-BN_BG_WHITE bg-opacity-90 | drop-shadow-md rounded-lg | overflow-hidden | transition-opacity duration-300 | absolute overflow-y-auto | z-50">
					<ul class="text-sm z-50" aria-labelledby="dropdownDefaultButton">
						<div
							v-for="(v, id) in list"
							@click="
								value = v;
								show = false;
							"
							class="block px-4 py-2 hover:bg-BN_BACKGROUND2 cursor-pointer hover:text-BN_BG_WHITE z-50"
							:class="v == value ? 'bg-BN_PRIMARY text-BN_BACKGROUND font-bold' : 'text-BN_BACKGROUND2'">
							{{ v }}
						</div>
					</ul>
				</div>
			</Field>
		</div>
	</div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
	name: "BN_dropdownInput",
	components: { Field, ErrorMessage },
	props: {
		label: String,
		list: Array,
		rules: Object,
		icon: String,
	},
	data() {
		return {
			value: "",
			show: false,
			focus: false,
		};
	},
};
</script>
