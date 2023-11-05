<template>
	<div class="relative z-0 w-full mb-6 group">
		<Field :name="label" :rules="rules" v-slot="{ field, errorMessage }">
			<input
				type="text"
				v-bind="field"
				placeholder=" "
				class="block py-2.5 pl-0 pr-8 w-full text-sm bg-opacity-0 bg-transparent appearance-none focus:outline-none focus:ring-0 peer caret-MQ_light -z-10 h-9"
				:maxlength="max ? max : 10000"
				:class="errorMessage ? 'text-MQ_red' : 'text-MQ_light'" />

			<div
				class="h-[1px] w-full rounded-full absolute transition-all duration-300 -mt-0.5"
				:class="errorMessage ? 'bg-BN_PRIMARY' : 'peer-hover:bg-opacity-70 bg-BN_BACKGROUND2 bg-opacity-40 peer-focus:bg-BN_BACKGROUND2 peer-focus:hover:bg-BN_BACKGROUND2'"></div>
			<div
				class="h-0.5 rounded-full absolute transition-all duration-300 w-0 peer-focus:w-full -mt-0.5"
				:class="errorMessage ? 'bg-BN_PRIMARY' : 'peer-hover:bg-opacity-70 bg-BN_BACKGROUND2 bg-opacity-40 peer-focus:bg-BN_BACKGROUND2 peer-focus:hover:bg-BN_BACKGROUND2'"></div>

			<ErrorMessage class="absolute text-xs text-BN_PRIMARY mt-1" :name="label" />
			<label
				class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] left-0 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				:class="errorMessage ? 'peer-focus:text-BN_BACKGROUND2 text-BN_BACKGROUND2 ' : 'peer-focus:text-BN_BACKGROUND2 text-BN_BACKGROUND2 text-opacity-75'">
				{{ label }} <b v-if="important">*</b>
			</label>
		</Field>
	</div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
	name: "BN_TextInput",
	components: { Field, ErrorMessage },
	props: {
		label: String,
		rules: Object,
		important: Boolean,
	},
};
</script>

<style lang="scss" scoped>
input {
	outline: none;
	background-color: transparent;
}
</style>
