<template>
	<div class="relative z-0 w-full mb-6 group drop-shadow-MQ">
		<Field type="text" :name="label" :rules="rules" v-slot="{ field, errorMessage }">
			<textarea
				v-bind="field"
				placeholder=" "
				class="block px-2 py-6 w-full text-sm rounded-t-md appearance-none focus:outline-none peer caret-BN_BACKGROUND2 border border-BN_BACKGROUND2 border-opacity-10 focus:border-opacity-30"
				:maxlength="max"
				rows="4"
				:class="errorMessage ? 'text-BN_PRIMARY' : 'text-BN_BACKGROUND2'"></textarea>

			<div
				class="h-[0.25px] w-full rounded-full absolute transition-all duration-300 -mt-0.5"
				:class="errorMessage ? 'bg-BN_PRIMARY' : 'peer-hover:bg-opacity-70 bg-BN_BACKGROUND2 bg-opacity-40 peer-focus:bg-BN_BACKGROUND2 peer-focus:hover:bg-BN_BACKGROUND2'"></div>
			<div
				class="h-0.5 rounded-full absolute transition-all duration-300 w-0 peer-focus:w-full -mt-0.5"
				:class="errorMessage ? 'bg-BN_PRIMARY' : 'peer-hover:bg-opacity-70 bg-BN_BACKGROUND2 bg-opacity-40 peer-focus:bg-BN_BACKGROUND2 peer-focus:hover:bg-BN_BACKGROUND2'"></div>

			<ErrorMessage class="absolute text-xs text-BN_PRIMARY mt-1" :name="label" />
			<div class="absolute w-full text-right text-xs mt-1 font-bold" :class="errorMessage ? 'text-BN_PRIMARY' : 'text-BN_BACKGROUND2 text-opacity-75'">{{ field.value ? field.value.length : 0 }} / {{ max }}</div>

			<label
				class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-2 scale-75 top-3 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-2"
				:class="errorMessage ? 'peer-focus:text-BN_PRIMARY text-BN_PRIMARY' : 'peer-focus:text-BN_BACKGROUND2 text-BN_BACKGROUND2 text-opacity-60'">
				{{ label }}
			</label>
		</Field>
	</div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
	name: "BN_AreaInput",
	components: { Field, ErrorMessage },
	props: {
		label: String,
		rules: Object,
		max: Number,
	},
};
</script>

<style lang="scss" scoped>
textarea {
	outline: none;
	background-color: transparent;
	resize: none;
}
</style>
