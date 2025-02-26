// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Footer as FlowbiteFooter } from "flowbite-react";
import { memo, type JSX } from "react";
import type { FooterProps } from "./footerProps";

/**
 * Footer component.
 */
export const Footer = memo(
	({ body }: FooterProps): JSX.Element => <FlowbiteFooter container>{body}</FlowbiteFooter>
);

Footer.displayName = "Footer";
