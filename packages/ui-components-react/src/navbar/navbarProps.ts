// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const NavbarPropTypes = {};

/**
 * Navbar props.
 */
export type NavbarProps = PropsWithChildren<InferProps<typeof NavbarPropTypes>>;
