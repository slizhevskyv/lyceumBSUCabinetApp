<template>
<v-app>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
        <v-list subheader dense>
            <v-list-group v-for="item in actionItems" :key="item.title" append-icon="" no-action>
                <v-list-tile slot="activator" active-class="blue--text" :to="item.url" v-ripple="{class: 'blue--text'}" avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                <div v-if="item.items != null">
                    <v-list-tile active-class="blue--text" v-for="subItem in item.items" :to="subItem.href" @click="$vuetify.goTo(subItem.id, {offset: -200})" :key="subItem.title">
                        <v-list-tile-action>
                            <v-icon>fas fa-minus fa-rotate-90</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </div>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer">
            </v-toolbar-side-icon>
            <span class="hidden-sm-and-down font-weight-thin">Личный кабинет</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="font-weight-thin" flat>Выйти</v-btn>
    </v-toolbar>
    <v-content>
        <v-container fluid fill-height>
            <v-layout>
                <router-view></router-view>
            </v-layout>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
/* eslint no-console: 0*/

export default {
	data: function() {
		return {
			drawer: null,
			actionItems: [
				{
					title: "Главная страница",
					icon: "fas fa-home",
					url: "/",
					items: null
				},
				{
					title: "Профиль",
					icon: "fas fa-user-circle",
					url: "/profile",
					items: null
				},
				{
					title: "Настройки",
					icon: "fas fa-cog",
					url: "/settings",
					items: [
						{
							title: "Личные настройки",
							href: "/settings#private",
							id: "#private"
						},
						{
							title: "Языковые настройки",
							href: "/settings#language",
							id: "#language"
						}
					]
				}
			]
		};
	}
};
</script>

<style>
</style>
