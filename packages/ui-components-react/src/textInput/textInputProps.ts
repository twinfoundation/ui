// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TextInputProps as FlowbiteTextInputProps } from "flowbite-react";
import type { PropsWithChildren } from "react";
import type { TextInputColor } from "./textInputColors";
import type { TextInputSize } from "./textInputSizes";
import type { IconComponent } from "../types/iconTypes";

/**
 * TextInput component props interface.
 */
export interface TextInputProps extends PropsWithChildren<Omit<FlowbiteTextInputProps, "label">> {
	/**
	 * TextInput color.
	 */
	color?: TextInputColor;
	/**
	 * TextInput sizing.
	 */
	sizing?: TextInputSize;
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
