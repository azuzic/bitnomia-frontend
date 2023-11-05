<template>
	<div
		class="sticky top-0 w-full transition-all duration-1000 z-[200] overflow-hidden"
		:class="[scrolled ? 'drop-shadow-2xl' : 'drop-shadow-none', globalStore.loaded2 ? 'h-16 mt-0 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-24' : 'h-screen pointer-events-none']">
		<div
			class="fixed top-0 left-0 w-full h-full from-BN_BACKGROUND via-sky-950 to-indigo-950 flex justify-center items-center z-[200] text-5xl text-BN_FONT_WHITE font-bold transition-all duration-1000"
			:class="globalStore.loaded3 ? 'opacity-0 pointer-events-none' : 'opacity-100'">
			<svg
				:class="[globalStore.loaded2 ? 'left-[35px] sm:left-[156px] -mt-3 sm:-mt-[18px] h-6 sm:h-9 drop-shadow-lg' : 'h-24 -mt-12 -translate-y-1/2 left-1/2 drop-shadow-2xl', globalStore.loaded1 ? '' : 'animate-pulse']"
				class="absolute top-1/2 -translate-x-1/2 transition-all duration-1000"
				viewBox="0 0 133 82"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M132.8 40.8C132.8 63.3 114.6 81.5 92.1 81.5H30.6C13.7 81.5 0 67.8 0 50.9C0 34 13.7 20.3 30.6 20.3C30.8 20.3 31.1 20.3 31.3 20.3C31.5 20.3 31.7 20.3 31.9 20.3H32C32.2 20.3 32.3 20.3 32.5 20.3C32.7 20.3 32.8 20.3 33 20.3C33.2 20.3 33.3 20.3 33.5 20.3C34 20.3 34.4 20.4 34.9 20.5C35.1 20.5 35.2 20.5 35.4 20.6C35.5 20.6 35.7 20.6 35.8 20.7C36.1 20.7 36.3 20.8 36.6 20.8C36.8 20.8 36.9 20.9 37.1 20.9C37.2 20.9 37.2 20.9 37.3 20.9C37.4 20.9 37.6 21 37.7 21C38.2 21.1 38.7 21.2 39.2 21.4C39.5 21.5 39.7 21.6 40 21.6C40.1 21.6 40.3 21.7 40.4 21.7C44.8 23.1 49.1 25.3 53.3 28C69.6 38.5 84.9 56.5 99.9 62.3C102.7 63.5 105.9 64.2 109.2 64.2C122.3 64.5 132.8 53.9 132.8 40.8Z"
					fill="#09B5DA" />
				<path d="M132.8 40.8C132.8 53.8 122.2 64.4 109.2 64.4C106.1 64.4 103 63.7 99.9 62.5C84.9 56.7 69.7 38.7 53.3 28.2C58.6 11.9 73.9 0 92 0C114.6 0.1 132.8 18.3 132.8 40.8Z" fill="#0096C5" />
			</svg>
		</div>

		<div class="absolute w-full h-full flex bg-gradient-to-r from-BN_BACKGROUND via-sky-950 to-indigo-950">
			<div class="grow h-full flex relative justify-center items-center" :class="globalStore.loaded3 ? 'opacity-100' : 'opacity-0'">
				<img
					loading="eager"
					class="absolute top-8 sm:-top-44 -mt-24 z-10 w-72 sm:w-auto transition-all duration-1000"
					:src="TopTitleBGElement"
					:class="[scrolled ? '-right-9 sm:right-0' : '', globalStore.loaded3 ? 'opacity-100 -right-36 sm:-right-32' : 'opacity-0 -right-[680px]']" />

				<button
					@click="scroll('contact')"
					class="right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 | absolute h-10 sm:h-12 w-36 sm:w-44 | rounded-xl text-sm sm:text-base | font-bold text-BN_FONT_WHITE hover:text-BN_BG_WHITE | flex justify-center items-center z-50 overflow-hidden border-2 group | hover:border-0 border-BN_PRIMARY hover:border-opacity-0 transition-all duration-500"
					:class="globalStore.loaded3 ? 'opacity-100' : 'opacity-0'">
					<div class="absolute flex justify-center items-center h-0 w-0 opacity-0 bg-BN_PRIMARY -z-[1] rounded-2xl group-hover:h-12 group-hover:w-44 group-hover:opacity-100 transition-all duration-500"></div>
					Contact Us
					<i class="ml-1.5 group-hover:ml-3 fa fa-solid fa-circle-right transition-all duration-500"></i>
				</button>
			</div>
		</div>

		<div class="ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-32 | absolute flex h-full flex-col transition-all duration-500 overflow-hidden z-50" :class="globalStore.loaded3 ? 'w-64' : 'w-0'">
			<img loading="eager" class="w-32 sm:w-64 min-w-[172px] sm:min-w-[256px] | absolute h-full drop-shadow-lg" :src="BinomiaLogo" />
		</div>
	</div>
</template>

<script>
import { useGlobalStore } from "@/stores/globalStore";
import TopTitleBGElement from "@/assets/Logos/BGelements/TopTitleBGElement2.svg";
import BinomiaLogo from "@/assets/Logos/BitnomiaLogo.svg";
window.mobileCheck = function () {
	let check = false;
	(function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};
export default {
	name: "Menu.vue",
	data() {
		return {
			scrolled: false,
		};
	},
	setup() {
		const globalStore = useGlobalStore();
		return { globalStore, TopTitleBGElement, BinomiaLogo };
	},
	mounted() {
		console.log(1);
		document.documentElement.style.backgroundImage = "linear-gradient(to right, rgb(22, 54, 94), rgb(8, 47, 73), rgb(30, 27, 75))";
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("load", () => {
			this.globalStore.loaded0 = true;
			console.log(2);
			setTimeout(() => {
				console.log(3);
				this.globalStore.loaded1 = true;
				window.scrollTo(0, 0);
			}, 500);
			setTimeout(() => {
				console.log(4);
				this.globalStore.loaded2 = true;
			}, 2500);
			setTimeout(() => {
				console.log(5);
				this.globalStore.loaded3 = true;
				document.documentElement.style.overflow = "auto";
				document.documentElement.style.backgroundImage = "none";
			}, 3500);
		});
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			const scrollPosition = window.scrollY;
			if (!window.mobileCheck()) this.scrolled = scrollPosition > 127;
			else this.scrolled = scrollPosition > 1;
		},
		scroll(id) {
			document.getElementById(id).scrollIntoView({ behavior: "smooth" });
		},
	},
};
</script>

<style>
html {
	overflow: hidden;
}
</style>
