<template>
<v-col class="me-5 sm:me-0 mb-5" cols="12" md="6" lg="5" sm="6">
    <v-expansion-panels variant="popout">
        <v-expansion-panel
        v-for="(message, i) in messages"
        :key="i"
        hide-actions
        >
        <v-expansion-panel-title>
            <v-row
            align="center"
            class="spacer"
            no-gutters
            >
            <v-col
                cols="4"
                md="1"
                sm="2"
            >
                <v-avatar
                size="36px"
                >
                <v-icon
                    :color="message.color"
                    :icon="message.icon"
                ></v-icon>
                </v-avatar>
            </v-col>

            <v-col
                class="hidden-xs-only text-left ms-2"
                md="3"
                sm="5"
            >
                <strong v-html="message.name"></strong>
                <span
                v-if="message.total"
                class="text-grey"
                >
                &nbsp;({{ message.total }})
                </span>
            </v-col>

            <v-col
                v-if="message.excerpt"
                class="text-medium-emphasis text-truncate hidden-sm-and-down"
            >
                &mdash;
                {{ message.excerpt }}
            </v-col>
            </v-row>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
            <v-card-text v-text="lorem"></v-card-text>
        </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</v-col>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        color: 'green',
        icon: 'mdi-account-multiple',
        name: 'Cassius Lc',
        title: 'Teste!',
      },
      {
        color: 'red',
        icon: 'mdi-account-multiple',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter',
      },
      {
        color: 'teal',
        icon: 'mdi-tag',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
      },
    ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
}
</script>

<style scoped>
.rounded-lg {
    border-radius: .5rem;
}
.align-items-center {
    align-items: center !important;
}
.justify-content-between {
    justify-content: space-between !important;
}
.fw-extrabold {
    font-weight: 700 !important;
}
.card {
    box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
    border-radius: .5rem;
}
</style>