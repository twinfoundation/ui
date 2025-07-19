// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

export const TABS_THEME_CONFIG = {
	base: "flex flex-col gap-2",
	tablist: {
		base: "flex w-full text-center",
		variant: {
			underline: "-mb-px flex-wrap border-b border-surface-primary dark:surface-primary-dark"
		},
		tabitem: {
			base: "flex flex-1 items-center justify-center text-sm p-4 font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-tertiary disabled:dark:text-tertiary-dark",
			variant: {
				underline: {
					base: "",
					active: {
						on: "font-bold relative after:absolute after:bottom-[-2px] after:left-1/4 after:w-1/2 after:border-b-2 after:border-brand-primary text-brand-primary",
						off: "border-b-2 border-transparent text-tertiary hover:border-gray-300 hover:text-gray-600"
					}
				}
			},
			icon: "mr-2 h-5 w-5"
		}
	}
} as const;
