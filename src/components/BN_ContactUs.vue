<template>
	<div class="relative w-full px-4 pt-16 flex justify-center">
		<div class="grow max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl transition-all duration-300">
			<div class="text-2xl font-bold text-BN_FONT pb-8">About you</div>

			<Form @submit="onSubmit" :validation-schema="schema">
				<div class="w-full flex flex-col gap-6 sm:gap-8 mt-4">
					<div class="relative flex gap-4 sm:gap-16">
						<BN_TextInput label="First Name" class="grow" />
						<BN_TextInput label="Last Name" class="grow" />
					</div>
					<div class="relative flex gap-4 sm:gap-16">
						<BN_TextInput label="Company" class="grow" />
						<BN_TextInput label="Phone" class="grow" />
					</div>
					<div class="relative flex gap-4 sm:gap-16 w-full">
						<BN_TextInput label="Email" class="grow" />
					</div>
				</div>

				<div class="text-2xl font-bold text-BN_FONT mt-4 sm:mt-2 mb-4">What is your budget?</div>

				<BN_dropdownInput label="Budget" :list="list" icon="" />

				<div class="text-2xl font-bold text-BN_FONT mt-4 sm:mt-2">Project description</div>

				<BN_AreaInput class="mt-6 sm:mt-4" label="Description" :max="2000" />

				<button
					@click="onSubmit()"
					:class="submitting || type != 'none' ? 'opacity-0 delay-0 pointer-events-none cursor-default' : 'opacity-100'"
					class="h-12 w-full sm:w-52 | rounded-xl text | font-bold text-BN_PRIMARY hover:text-BN_FONT_WHITE | flex justify-center items-center mt-12 sm:mt-8 z-10 overflow-hidden border-2 group | hover:h-12 hover:w-full sm:hover:w-52 hover:border-0 relative border-BN_PRIMARY hover:border-opacity-0 transition-all duration-500">
					<div class="absolute h-0 w-0 opacity-0 bg-BN_PRIMARY -z-[1] rounded-2xl group-hover:h-12 group-hover:w-full sm:group-hover:w-52 group-hover:opacity-100 transition-all duration-500"></div>
					Submit
					<i class="fa-solid fa-paper-plane ml-2 text-BN_PRIMARY group-hover:text-BN_FONT_WHITE group-hover:ml-4 transition-all duration-500"></i>
				</button>

				<img class="absolute | animate-spin_slow transition-all duration-500" :src="macroquiet_logo_icon" :class="submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'" />

				<BN_alert :show="type == 'warning'" color="rgb(220, 38, 68)" icon="fa-solid fa-triangle-exclamation" class="absolute -mt-12">
					<b>Error sending message!</b> <br />
					This is not your fault, we are probably working on it!
				</BN_alert>
				<BN_alert :show="type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check" class="absolute -mt-12">
					<b>Your message has been successfully sent!</b> <br />
					We will contact you very soon!
				</BN_alert>
			</Form>
		</div>
	</div>
</template>

<script>
import BN_TextInput from "@/components/ContactUs/BN_TextInput.vue";
import BN_ButtonInput from "@/components/ContactUs/BN_ButtonInput.vue";
import BN_AreaInput from "@/components/ContactUs/BN_AreaInput.vue";
import BN_FileInput from "@/components/ContactUs/BN_FileInput.vue";
import BN_dropdownInput from "@/components/ContactUs/BN_dropdownInput.vue";
import BN_alert from "@/components/ContactUs/BN_alert.vue";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

let wait = function (seconds) {
	return new Promise((resolveFn) => {
		setTimeout(resolveFn, seconds * 1000);
	});
};

export default {
	name: "BN_ContactUs",
	components: {
		BN_TextInput,
		BN_AreaInput,
		BN_FileInput,
		BN_ButtonInput,
		BN_dropdownInput,
		BN_alert,
		Form,
		Field,
	},
	setup() {
		const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
		const schema = yup.object({
			"First Name": yup.string().required().label("First Name"),
			"Last Name": yup.string().required().label("Last Name"),
			Description: yup.string().required().label("Description"),
			Company: yup.string().required().label("Company"),
			Phone: yup.string().required().matches(phoneRegExp, "Phone number is not valid").label("Phone"),
			Budget: yup.string().required().label("Budget"),
			Email: yup.string().required().email().label("Email"),
		});
		return {
			schema,
		};
	},
	data() {
		return {
			list: ["Up to 50.000$", "50-100.00$", "100-250.00$", "Over 250.00$", "Can't disclose"],
			submitting: false,
			type: "none",
		};
	},
	methods: {
		async onSubmit(values) {
			if (values) {
				this.submitting = true;
				try {
					await emailjs.send(
						"service_cu0q1tj",
						"template_gxti4ir",
						{
							from_name: values["First Name"] + values["Last Name"],
							email_id: values["Email"],
							company: values["Company"],
							phone: values["Phone"],
							budget: values["Budget"],
							message: values["Description"],
						},
						"Hvy7VtUPqB2M4ZsqU"
					);
					await wait(2);
					this.submitting = false;
					this.type = "success";
					await wait(4);
					this.type = "none";
				} catch (e) {
					await wait(2);
					this.submitting = false;
					this.type = "warning";
					await wait(4);
					this.type = "none";
					console.error("Error sending message!");
				}
			}
		},
	},
};
</script>
