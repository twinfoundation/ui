// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const SidebarPropTypes = {};

/**
 * Sidebar props.
 */
export type SidebarProps = PropsWithChildren<InferProps<typeof SidebarPropTypes>>;
