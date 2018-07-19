<template>
    <div>
    <div class="item-wrapper" v-for="(item, index) in data" :key="index">
        <a @click="changeStateDropdown(index)" class="item" :href="item.url" v-ripple="{class: 'blue--text'}">
            <div class="content">{{item.title}}</div>
            <div class="icon"><i :class="[{'rotate-360': item.dropdown}, item.icon]" class="fa-fw fa-lg"></i></div>
        </a>
        <div v-if="item.items != undefined" class="dropdown"
        :class="{'dropdown-animate': item.dropdown, 'dropup-animate': !item.dropdown}">
            <div class="dropdown-item mb-3">
                <v-icon>fas fa-minus fa-rotate-90</v-icon>
                <span>DropDown</span>
            </div>
            <div class="dropdown-item mb-3">
                <v-icon>fas fa-minus fa-rotate-90</v-icon>
                <span>DropDown</span>
            </div>
            <div class="dropdown-item mb-3">
                <v-icon>fas fa-minus fa-rotate-90</v-icon>
                <span>DropDown</span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
/* eslint no-console: 0*/

export default {
	name: "Settings",
	data: function() {
		return {
			showDropdown: false
		};
	},
	props: {
		data: Array
	},
	methods: {
		changeStateDropdown: function(index) {
			if (this.data[index].dropdown != null) {
				this.data[index].dropdown = !this.data[index].dropdown;
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-wrapper {
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
}
.item {
	display: flex;
	justify-content: space-between;
	height: 48px;
	width: 300px;
	color: #000;
	padding: 0 5% 0 5%;
	text-decoration: none;
}
.content {
	display: flex;
	align-self: center;
	width: 100%;
}
.icon {
	display: flex;
	align-self: center;
}
.item:hover {
	background-color: #eee;
}
.dropdown {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding-left: 20%;
	width: 100%;
	opacity: 0;
	height: 0;
	visibility: hidden;
	transition: height ease 3s;
}

.dropdown-item {
	display: flex;
	width: 100%;
	align-items: center;
}

.dropdown-animate {
	animation: dropdown 0.5s ease-in;
	animation-fill-mode: forwards;
}

.dropup-animate {
	animation: dropup 0.5s ease-out;
	animation-fill-mode: forwards;
}

.rotate-360 {
	animation: rotate 2s ease;
}

@keyframes dropdown {
	0% {
	}
	25% {
	}
	50% {
		opacity: 0.5;
	}
	75% {
		opacity: 0.75;
	}
	100% {
		opacity: 1;
		visibility: visible;
		margin-top: 15px;
		height: 100px;
	}
}
@keyframes dropup {
	0% {
		opacity: 1;
		visibility: visible;
		margin-top: 15px;
		height: 100px;
	}
	25% {
		opacity: 0.75;
	}
	50% {
		opacity: 0.5;
	}
	75% {
		opacity: 0.25;
	}
	100% {
		margin-top: 0;
		visibility: hidden;
		opacity: 0;
	}
}
@keyframes rotate {
	0% {
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
