// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TextInputProps as FlowbiteTextInputProps } from "flowbite-react";
import type { PropsWithChildren } from "react";
import type { TextInputColors } from "./textInputColors";
import type { TextInputSizes } from "./textInputSizes";
import type { IconComponent } from "../types/iconTypes";

/**
 * TextInput component props interface.
 */
export interface TextInputProps extends PropsWithChildren<Omit<FlowbiteTextInputProps, "label">> {
	/**
	 * TextInput color.
	 */
	color?: TextInputColors;
	/**
	 * TextInput sizing.
	 */
	sizing?: TextInputSizes;
	/**
	 * TextInput id.
	 */
	id?: string;
	/**
	 * TextInput disabled state.
	 */
	disabled?: boolean;
	/**
	 * TextInput required state.
	 */
	required?: boolean;
	/**
	 * TextInput read-only state.
	 */
	readOnly?: boolean;
	/**
	 * TextInput name.
	 */
	name?: string;
	/**
	 * TextInput value.
	 */
	value?: string;
	/**
	 * TextInput placeholder.
	 */
	placeholder?: string;
	/**
	 * TextInput class name.
	 */
	className?: string;
	/**
	 * TextInput type.
	 */
	type?: string;
	/**
	 * TextInput helper text.
	 */
	helperText?: React.ReactNode;
	/**
	 * TextInput label.
	 */
	label?: string;
	/**
	 * TextInput icon.
	 */
	icon?: IconComponent;
	/**
	 * TextInput right icon.
	 */
	rightIcon?: IconComponent;
	/**
	 * TextInput addon.
	 */
	addon?: string;
}
