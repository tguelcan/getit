<template>
    <div class="container mx-auto sm:py-0 sm:px-0">
        <g-search :show="showSearch" @dismiss="closeSearch" />
        <!-- CTA Section -->
        <div class="flex flex-wrap bg-light text-primary -mt-1">
            <div class="w-full md:w-1/2">
                <div
                    class="h-64 md:h-full bg-right bg-cover"
                    style="background-image: url('/img/mocks.png')"
                ></div>
            </div>
            <div class="w-full md:w-1/2 p-4 md:p-8 h-full select-none">
                <div class="my-auto">
                    <h2
                        class="text-3xl leading-9 font-bold tracking-tight text-primary sm:text-4xl sm:leading-10 my-2"
                    >
                        Get It!
                        <span
                            class="inline-block align-top font-light text-secondary text-xl leading-snug"
                            >Delivery</span
                        >
                        <br />
                    </h2>

                    <p>
                        Local Stores sell local goods to local clients brought
                        to them by local delivery services which are organized
                        by an intelligent ride sharing algorithm. Most of the
                        small commercials fear the loss of clients, so we bring
                        their goods to the clients directly by intelligently
                        hailing the delivery rides. This leads to localized
                        delivery services combined with lowest environmental
                        burden.
                    </p>
                    <g-install />
                </div>
            </div>
        </div>
        <g-card headline="List Example"><g-list /></g-card>
        <g-card
            headline="This is a beautiful form"
            subtitle="Please provide required information"
            class="mt-3"
        >
            <g-form submit="onSubmit">
                <g-form-field>
                    <g-radio-buttons
                        v-model="radioButtons"
                        label="Please select"
                        :items="radioButtonsData"
                    ></g-radio-buttons>
                </g-form-field>
                <g-form-field>
                    <g-input
                        v-model="inputName"
                        placeholder=""
                        label="Your Name"
                        type="text"
                        disabled
                        required
                    ></g-input>
                </g-form-field>
                <g-form-field>
                    <g-input
                        placeholder="test@mailbox.com"
                        label="Your email"
                        type="email"
                    ></g-input>
                </g-form-field>
                <div class="grid grid-cols-1 sm:gap-4 sm:grid-cols-2">
                    <g-form-field>
                        <g-input
                            placeholder="Password"
                            label="Your password"
                            type="password"
                        ></g-input>
                    </g-form-field>
                    <g-form-field>
                        <g-input
                            placeholder="Password"
                            label="Confirm password"
                            type="password"
                        ></g-input>
                    </g-form-field>
                </div>
                <g-form-field>
                    <g-checkbox v-model="checkbox"
                        >I accept the
                        <a href="#" class="hover:underline"
                            >Terms and Conditions</a
                        ></g-checkbox
                    >
                </g-form-field>
            </g-form>
        </g-card>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
                <span class="muted-lead"
                    ><i class="icon i-dash"></i> with image and footer
                    slot</span
                >
                <g-card
                    headline="Card with Image"
                    subtitle="Subhead"
                    media="/img/example2.png"
                >
                    <p>
                        Weit hinten, hinter den Wortbergen, fern der Länder
                        Vokalien und Konsonantien leben die Blindtexte.
                        Abgeschieden wohnen sie in Buchstabhausen an der Küste
                        des Semantik, eines großen Sprachozeans.
                    </p>
                    <template v-slot:footer>
                        <div class="flex">
                            <div class="mr-auto">
                                <g-avatar
                                    img-src="../img/userpic.jpg"
                                    custom="my-auto mr-3 h-10 w-10"
                                    ><ol>
                                        <li
                                            class="leading-none font-bold text-dark"
                                        >
                                            Clara Marlson
                                        </li>
                                        <li
                                            class="text-sm leading-snug text-grey"
                                        >
                                            Go to profile
                                        </li>
                                    </ol></g-avatar
                                >
                            </div>
                            <div class="my-auto mr-3">
                                <g-button color="flat" link
                                    ><i class="icon i-heart mr-1"></i
                                    ><small>2</small></g-button
                                >
                            </div>
                            <div class="my-auto">
                                <g-button color="flat" link
                                    ><i class="icon i-chat mr-1"></i
                                    ><small>17</small></g-button
                                >
                            </div>
                        </div>
                    </template>
                </g-card>
            </div>
            <div>
                <span class="muted-lead"
                    ><i class="icon i-dash"></i> with image and header
                    slot</span
                >
                <g-card
                    headline="Card with Image"
                    subtitle="Subhead"
                    media="/img/example.jpg"
                >
                    <template v-slot:header>
                        <div class="flex">
                            <div class="mr-auto">
                                <g-avatar
                                    img-src="../img/userpic.jpg"
                                    custom="my-auto mr-3 h-10 w-10"
                                    ><ol>
                                        <li
                                            class="leading-none font-bold text-dark"
                                        >
                                            Clara Marlson
                                        </li>
                                        <li
                                            class="text-sm leading-snug text-grey"
                                        >
                                            Go to profile
                                        </li>
                                    </ol></g-avatar
                                >
                            </div>
                            <div class="my-auto mr-3">
                                <g-button color="flat" link
                                    ><i class="icon i-menu mr-1"></i
                                ></g-button>
                            </div>
                        </div>
                    </template>
                    <p>
                        Weit hinten, hinter den Wortbergen, fern der Länder
                        Vokalien und Konsonantien leben die Blindtexte.
                        Abgeschieden wohnen sie in Buchstabhausen an der Küste
                        des Semantik, eines großen Sprachozeans.
                    </p>
                    <g-button width="w-full" class="mt-3">
                        Full width Button
                    </g-button>
                </g-card>
            </div>
        </div>
        <g-card headline="Actionbar" class="mt-3">
            <g-actionbar :items="actionBarMenuItems" />
            <g-actionbar
                :items="actionBarMenuItemsAlternate"
                class="mt-3"
                alternate
            />
            <span class="muted-lead"
                ><i class="icon i-dash"></i> with custom css</span
            >
            <g-actionbar
                :items="actionBarMenuItemsAlternate"
                class="border"
                alternate
            />
            <g-actionbar
                :items="actionBarMenuItemsAlternate"
                class="mt-3 shadow-md"
                alternate
            />
        </g-card>
        <g-card
            headline="Headline with a long title"
            subtitle="Subhead"
            class="mt-3"
        >
            Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
            Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
            Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
            <div class="flex">
                <div class="w-1/2">
                    <g-button class="mt-3">
                        Primary
                    </g-button>
                    <g-button class="mt-3">
                        <i class="icon i-search" /> Search
                    </g-button>
                    <g-button class="mt-3" color="secondary">
                        Secondary
                    </g-button>
                    <g-button class="mt-3" color="tertiary">
                        Tertiary <i class="icon i-dropdown-closed" />
                    </g-button>
                    <g-button class="mt-3" color="flat">
                        Flat
                    </g-button>
                    <g-button class="mt-3" disabled>
                        Disabled
                    </g-button>
                    <div class="p-3 mt-3 bg-primary flex flex-wrap">
                        <g-button color="alternate">
                            Alternate
                        </g-button>
                        <g-button class="my-auto ml-5" color="alternate" link>
                            Link
                        </g-button>
                    </div>
                </div>
                <div>
                    <g-button rounded class="mt-3">
                        Primary
                    </g-button>
                    <g-button rounded class="mt-3" color="tertiary">
                        Tertiary <i class="icon i-dropdown-closed" />
                    </g-button>
                    <g-button
                        rounded-full
                        class="mt-3"
                        @click="showSearchAction"
                    >
                        <i class="icon i-search" />
                    </g-button>
                    <g-button
                        class="mt-3"
                        color="flat"
                        @click="showBackToTop = !showBackToTop"
                    >
                        {{ showBackToTop ? 'hide' : 'show' }} back to top
                    </g-button>
                </div>
            </div>
        </g-card>
        <g-scroll-top v-if="showBackToTop" />
        <g-card headline="Styles" class="mt-3">
            <div class="muted-lead mt-3 mb-1">
                <i class="icon i-dash"></i> Colors
            </div>
            <div class="flex flex-wrap text-center">
                <!-- BLUE TONES -->
                <div class="box bg-tertiary text-white">
                    Teritary
                </div>
                <div class="box bg-primary text-white">
                    Primary
                </div>
                <div class="box bg-secondary text-white">
                    Secondary
                </div>
                <div class="box bg-info text-white">
                    Info
                </div>
            </div>
            <!-- STATE TONES -->
            <div class="flex flex-wrap text-center">
                <div class="box bg-danger text-white">
                    Danger
                </div>
                <div class="box bg-success text-white">
                    Success
                </div>
                <div class="box bg-warning text-white">
                    Warning
                </div>
            </div>
            <!-- GREY TONES -->
            <div class="flex flex-wrap text-center">
                <div class="box bg-black text-white">
                    Black
                </div>
                <div class="box bg-dark text-white">
                    Dark
                </div>
                <div class="box bg-subtle text-white">
                    Subtle
                </div>
                <div class="box bg-grey text-white">
                    Grey
                </div>
                <div class="box bg-neutral text-white">
                    Neutral
                </div>
                <div class="box bg-shadow text-dark">
                    Shadow
                </div>
                <div class="box bg-light text-dark">
                    Light
                </div>
            </div>
            <div class="muted-lead mt-3 mb-1">
                <i class="icon i-dash"></i> Opacity
            </div>
            <div class="flex flex-wrap text-center">
                <div class="box bg-subtle text-white opacity-100">
                    opacity-100
                </div>
                <div class="box bg-subtle text-white opacity-75">
                    opacity-75
                </div>
                <div class="box bg-subtle text-white opacity-50">
                    opacity-50
                </div>
                <div class="box bg-subtle text-white opacity-25">
                    opacity-25
                </div>
                <div class="box bg-subtle text-white opacity-0">
                    opacity-0
                </div>
            </div>
            <div class="muted-lead mt-3 mb-1">
                <i class="icon i-dash"></i> Shadows
            </div>
            <div class="flex flex-wrap text-center">
                <div class="box shadow-sm">
                    Small
                </div>
                <div class="box shadow">
                    Base
                </div>
                <div class="box shadow-md">
                    Medium
                </div>
                <div class="box shadow-lg">
                    Large
                </div>
                <div class="box shadow-xl">
                    Extra Large
                </div>
            </div>
            <div class="muted-lead mt-3 mb-1">
                <i class="icon i-dash"></i> Hover examples
            </div>
            <div class="flex flex-wrap text-center">
                <div class="animated box shadow-none hover:shadow-md">
                    0 to md
                </div>
                <div class="animated box shadow-xs hover:shadow-md">
                    xs to md
                </div>
                <div class="animated box shadow-md hover:shadow-xl">
                    md to xl
                </div>
            </div>
        </g-card>

        <g-card headline="Avatars" class="mt-3">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                    <div class="muted-lead mt-3 mb-1">
                        <i class="icon i-dash"></i> User Avatar
                    </div>
                    <div class="w-40">
                        <g-avatar img-src="../img/userpic.jpg" img-link="/" left
                            ><span class="mr-2">Clara Marlson</span></g-avatar
                        >
                    </div>
                    <div class="w-40 mt-3">
                        <g-avatar img-src="../img/userpic.jpg"
                            ><span class="ml-2">Clara Marlson</span></g-avatar
                        >
                    </div>
                    <div class="w-40 mt-3">
                        <g-avatar
                            img-src="../img/userpic.jpg"
                            custom="my-auto mr-3 h-10 w-10"
                            ><ol>
                                <li class="leading-none font-bold text-dark">
                                    Clara Marlson
                                </li>
                                <li class="text-sm leading-snug text-grey">
                                    Go to profile
                                </li>
                            </ol></g-avatar
                        >
                    </div>
                </div>
                <div>
                    <div class="muted-lead mt-3 mb-1">
                        <i class="icon i-dash"></i> User Groups
                    </div>
                    <div class="flex overflow-hidden">
                        <img
                            class="inline-block h-6 w-6 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-1 inline-block h-6 w-6 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-1 inline-block h-6 w-6 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-1 inline-block h-6 w-6 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>

                    <div class="flex overflow-hidden mt-3">
                        <img
                            class="inline-block h-8 w-8 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-2 inline-block h-8 w-8 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-2 inline-block h-8 w-8 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-2 inline-block h-8 w-8 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>

                    <div class="flex overflow-hidden mt-3">
                        <img
                            class="inline-block h-10 w-10 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-2 inline-block h-10 w-10 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-2 inline-block h-10 w-10 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt=""
                        />
                        <img
                            class="-ml-2 inline-block h-10 w-10 rounded-full text-white border-2 border-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </g-card>

        <g-card headline="Rating Stars (Todo)" class="mt-3">
            <div class="muted-lead mt-3 mb-1">
                <i class="icon i-attention-2"></i> Filled icons are missing
            </div>
            <g-rating-stars icon="heart" color="primary" />
        </g-card>
        <g-card class="mt-3">
            <h3>Dropdown and Menu</h3>
            <p>
                Dropdown function build on top of Buttons and include the Menu
                Item. You can use this functionality also for show/hide an
                element.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <g-dropdown
                        :show-content="dropdown"
                        animation="slide-bottom-fade"
                        @click-outside="dropdown = false"
                    >
                        <g-dropdown slot="button">
                            <g-button
                                class="mt-2"
                                @click="dropdown = !dropdown"
                            >
                                Right
                                <i
                                    class="icon"
                                    :class="
                                        dropdown
                                            ? 'i-dropdown-closed'
                                            : 'i-dropdown-open'
                                    "
                                />
                            </g-button>
                        </g-dropdown>
                        <g-dropdown slot="content">
                            <g-menu
                                :menu="[
                                    { name: 'Edit', route: '/#' },
                                    { name: 'Duplicate', route: '/#' }
                                ]"
                                border-bottom
                            />
                            <g-menu
                                :menu="[
                                    {
                                        name: 'Add to Favs',
                                        route: '/#'
                                    },
                                    { name: 'Delete', route: '/#' }
                                ]"
                            />
                        </g-dropdown>
                    </g-dropdown>
                    <g-dropdown
                        :show-content="dropdownLeft"
                        animation="slide-bottom-fade"
                        position="left"
                        @click-outside="dropdownLeft = false"
                    >
                        <g-dropdown slot="button">
                            <g-button
                                class="mt-2"
                                @click="dropdownLeft = !dropdownLeft"
                            >
                                Left
                                <i
                                    class="icon"
                                    :class="
                                        dropdownLeft
                                            ? 'i-dropdown-closed'
                                            : 'i-dropdown-open'
                                    "
                                />
                            </g-button>
                        </g-dropdown>
                        <g-dropdown slot="content">
                            <g-menu
                                :menu="[
                                    { name: 'Edit', route: '/#' },
                                    { name: 'Duplicate', route: '/#' }
                                ]"
                                border-bottom
                            />
                            <g-menu
                                :menu="[
                                    {
                                        name: 'Add to Favs',
                                        route: '/#'
                                    },
                                    { name: 'Delete', route: '/#' }
                                ]"
                            />
                        </g-dropdown>
                    </g-dropdown>
                </div>
                <div>
                    <g-menu
                        :menu="[
                            { name: 'One', route: '/#' },
                            { name: 'Two', route: '/#' },
                            { name: 'Three', route: '/#' }
                        ]"
                        border-bottom
                    />
                    <g-menu
                        :menu="[
                            { name: 'Einz', route: '/#' },
                            { name: 'Zwei', route: '/#' }
                        ]"
                        border-bottom
                    />
                </div>
            </div>
            <div>
                <g-dropdown :show-content="showFunction" full>
                    <g-dropdown slot="button">
                        <g-button
                            class="mt-2"
                            width="w-full"
                            color="flat"
                            @click="showFunction = !showFunction"
                        >
                            Show {{ showFunction ? 'less' : 'more' }}
                        </g-button>
                    </g-dropdown>
                    <g-dropdown slot="content">
                        <div class="flex flex-col md:flex-row">
                            <div>
                                <img
                                    class="rounded-sm w-auto"
                                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                    alt="Woman paying for a purchase"
                                />
                            </div>
                            <div class="mt-3 md:mt-0 md:ml-3">
                                <div
                                    class="uppercase tracking-wide leading-none text-sm text-grey font-bold"
                                >
                                    Marketing
                                </div>
                                <a
                                    href="#"
                                    class="block mt-1 text-lg leading-tight font-bold hover:underline"
                                    >Finding customers for your new business</a
                                >
                                <p class="mt-2">
                                    Getting a new business off the ground is a
                                    lot of hard work. Here are five ideas you
                                    can use to find your first customers. Weit
                                    hinten, hinter den Wortbergen, fern der
                                    Länder Vokalien und Konsonantien leben die
                                    Blindtexte. Abgeschieden wohnen sie in
                                    Buchstabhausen an der Küste des Semantik,
                                    eines großen Sprachozeans.
                                </p>
                            </div>
                        </div>
                    </g-dropdown>
                </g-dropdown>
            </div>
        </g-card>

        <g-card headline="Modal" class="mt-3">
            <div class="flex flex-wrap">
                <g-button class="mr-3 mt-3" @click="showModal = true"
                    >Show modal</g-button
                >
                <g-button class="mr-3 mt-3" @click="showModalCentered = true"
                    >Show centered modal</g-button
                >
                <g-button class="mr-3 mt-3" @click="showModalFull = true"
                    >Show full modal</g-button
                >
            </div>
            <g-modal
                :show="showModal"
                alternate
                @confirm="showModal = false"
                @dismiss="showModal = false"
            >
                <template v-slot:header>
                    <h2>Page title</h2>
                </template>
                Ready to get started? Keep scrolling to see some great
                components. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Consectetur, molestias officiis quaerat vel corporis iste
                asperiores autem distinctio facere id.</g-modal
            >
            <g-modal
                :show="showModalCentered"
                centered
                @confirm="showModalCentered = false"
                @dismiss="showModalCentered = false"
            >
                <template v-slot:header>
                    <h2>Centered title</h2>
                </template>
                Ready to get started? Keep scrolling to see some great
                components. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Consectetur, molestias officiis quaerat vel corporis iste
                asperiores autem distinctio facere id.</g-modal
            >
            <g-modal
                :show="showModalFull"
                full
                @confirm="showModalFull = false"
                @dismiss="showModalFull = false"
            >
                <template v-slot:header>
                    <h2>Here might be a page title</h2>
                </template>
                Ready to get started? Keep scrolling to see some great
                components. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Consectetur, molestias officiis quaerat vel corporis iste
                asperiores autem distinctio facere id.</g-modal
            >
        </g-card>
        <g-card headline="Infoboxes" class="mt-3">
            <g-info class="my-3" color="primary">
                <i class="icon i-alarm" /> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit
            </g-info>
            <g-info class="my-3">
                Secondary is default if your don't set color. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit
            </g-info>
            <g-info class="my-3" color="success">
                Successful Lorem ipsum dolor sit amet, consectetur adipisicing
                elit
            </g-info>
            <g-info class="my-3" color="warning">
                <i class="icon i-crash" /> Warning Lorem ipsum dolor sit amet,
                consectetur adipisicing elit
            </g-info>
            <g-info class="my-3" color="danger">
                <i class="icon i-electricity-1" /> Danger Lorem ipsum dolor sit
                amet, consectetur adipisicing elit
            </g-info>
            <g-info class="my-3" color="tertiary">
                Tertiary Lorem ipsum dolor sit amet, consectetur adipisicing
                elit
            </g-info>
            <g-info class="my-3" color="grey">
                Tertiary Lorem ipsum dolor sit amet, consectetur adipisicing
                elit
            </g-info>
            <g-info class="my-3" color="primary" rounded>
                <i class="icon i-alarm" /> Rounedd Lorem ipsum dolor sit amet,
                consectetur adipisicing elit
            </g-info>
            <g-info class="my-3" color="primary" rounded-full>
                <i class="icon i-alarm" /> Rounedd Full Lorem ipsum dolor sit
                amet, consectetur adipisicing elit
            </g-info>
            <g-info class="my-3" color="grey" frame>
                <h2>Framed</h2>
                Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
                Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
                Buchstabhausen an der Küste des Semantik, eines großen
                Sprachozeans. Ein kleines Bächlein namens Duden fließt durch
                ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist
                ein paradiesmatisches Land, in dem einem gebratene Satzteile in
                den Mund fliegen.
            </g-info>
        </g-card>
        <g-card headline="Upload Area" class="mt-3">
            <div class="flex justify-center">
                <div class="w-full md:w-1/2">
                    <g-upload-area />
                </div>
            </div>
        </g-card>
        <g-card headline="Progressbar and Separator" class="mt-3">
            <div class="w-full">
                <g-progressbar :progress-value="progressValue" />
                <div class="muted-lead mt-3 mb-1">
                    <i class="icon i-dash"></i> alternate
                </div>
                <g-progressbar :progress-value="progressValue - 10" alternate />
                <div class="muted-lead mt-3 mb-1">
                    <i class="icon i-dash"></i> scroll status
                </div>
                <g-scroll-progress :pin="false" />
                <g-separator />
                <g-separator content="AND" color="grey" />
                <g-separator position="left" content="Einstellungen" />
                <g-separator position="right" content="Einstellungen" />
            </div>
        </g-card>
        <g-card headline="Tags" class="mt-3">
            <g-tag>Inactive</g-tag>
            <g-tag color="secondary">
                Error
            </g-tag>
            <g-tag color="primary">
                #hastag
            </g-tag>
            <g-tag color="tertiary">
                #Maintenance
            </g-tag>
            <g-tag color="flat">
                Flatiflat
            </g-tag>
            <g-tag color="success">
                Active
            </g-tag>
            <g-tag color="warning">
                Warning
            </g-tag>
            <g-tag color="danger">
                Danger
            </g-tag>
            <div class="muted-lead mt-3 mb-1">
                <i class="icon i-dash"></i> with custom css
            </div>
            <g-tag color="primary">
                #hastag
                <button class="tag-button">
                    <i class="icon i-close" />
                </button>
            </g-tag>
            <g-tag color="tertiary">
                <i class="icon i-user" /> Maxi Maul
            </g-tag>
            <g-tag color="success"> <i class="icon i-check" /> Yes! </g-tag>
            <div class="muted-lead mt-3 mb-1">
                <i class="icon i-dash"></i> Large
            </div>
            <g-tag large>Inactive</g-tag>
            <g-tag color="secondary" large>
                Error
            </g-tag>
            <g-tag color="primary" large>
                #hastag
            </g-tag>
        </g-card>
        <g-card headline="Table Example" class="mt-3">
            <g-table />
        </g-card>
        <g-card headline="CTA Sections" class="mt-3">
            <g-cta-section />
        </g-card>
        <g-card headline="FAQ Example" class="mt-3">
            <g-faq />
        </g-card>
    </div>
</template>

<script>
import gCard from '@/components/molecules/card'
import gButton from '@/components/molecules/button'
import gRatingStars from '@/components/molecules/ratingStars'
import gDropdown from '@/components/molecules/dropdown'
import gMenu from '@/components/molecules/menu'
import gInfo from '@/components/molecules/info'
import gProgressbar from '@/components/molecules/progressbar'
import gSeparator from '@/components/molecules/separator'
import gTable from '@/components/molecules/table'
import gTag from '@/components/molecules/tag'
import gForm from '@/components/molecules/form'
import gFormField from '@/components/molecules/formField'
import gCheckbox from '@/components/molecules/checkbox'
import gInput from '@/components/molecules/input'
import gRadioButtons from '@/components/molecules/radioButtons'
import gAvatar from '@/components/molecules/avatar'
import gList from '@/components/molecules/list'

import gUploadArea from '@/components/organism/uploadArea'
import gCtaSection from '@/components/organism/ctaSection'
import gFaq from '@/components/organism/faq'
import gActionbar from '@/components/organism/actionbar'
import gScrollTop from '@/components/organism/scrollTop'
import gScrollProgress from '@/components/organism/scrollProgress'
import gModal from '@/components/organism/modal'
import gInstall from '@/components/organism/install'

import gSearch from '@/components/templates/search'

export default {
    name: 'Index',
    middleware: ['authenticated'],
    components: {
        gCard,
        gButton,
        gRatingStars,
        gDropdown,
        gMenu,
        gInfo,
        gUploadArea,
        gProgressbar,
        gSeparator,
        gTable,
        gForm,
        gFormField,
        gTag,
        gCtaSection,
        gFaq,
        gCheckbox,
        gInput,
        gActionbar,
        gRadioButtons,
        gScrollTop,
        gScrollProgress,
        gModal,
        gAvatar,
        gInstall,
        gList,
        gSearch
    },
    subNavigation: {
        leftNavigationContent: [
            {
                name: 'Home',
                route: '/#'
            },
            {
                name: 'Page 2',
                route: '/#'
            }
        ],
        rightNavigationContent: [
            {
                name: 'Search',
                emit: 'search',
                icon: 'search'
            },
            {
                name: 'Add',
                route: '/profile',
                icon: 'user'
            }
        ]
    },
    data: () => ({
        dropdown: false,
        dropdownLeft: false,
        showFunction: false,
        showModal: false,
        showSearch: false,
        showModalCentered: false,
        showModalFull: false,
        progressValue: 80,
        inputName: 'John Doe',
        checkbox: false,
        showBackToTop: true,
        pinProgress: false,
        radioButtons: '',
        radioButtonsData: [
            {
                text: 'Radio1',
                value: '1'
            },
            {
                text: 'Radio2',
                value: '2'
            }
        ],
        actionBarMenuItems: {
            leftNavigationContent: [
                {
                    name: 'Home',
                    icon: 'dash'
                },
                {
                    name: 'Share',
                    icon: 'share'
                }
            ],
            rightNavigationContent: [
                {
                    name: '2 items selected',
                    type: 'text',
                    class: 'border-r pr-6 text-light font-light'
                },
                {
                    name: 'Close'
                }
            ]
        },
        actionBarMenuItemsAlternate: {
            leftNavigationContent: [
                {
                    name: 'New',
                    icon: 'new-document'
                },
                {
                    name: 'Print',
                    icon: 'print'
                },
                {
                    name: 'upload',
                    icon: 'upload'
                }
            ],
            rightNavigationContent: [
                {
                    name: 'Important',
                    type: 'text',
                    class:
                        'border-l sm:border sm:border-dotted border-info font-light pl-2 sm:px-3'
                },
                {
                    icon: 'notifications'
                }
            ]
        }
    }),
    mounted() {
        this.$root.$on('search', (obj) => {
            this.showSearch = true
            this.showBackToTop = false
        })
    },
    methods: {
        onSubmit(data) {
            console.log('Form', data)
        },
        showSearchAction() {
            this.$root.$emit('search')
        },
        closeSearch() {
            this.showSearch = false
            this.showBackToTop = true
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    @apply m-3 p-6 rounded select-none;
}
</style>
