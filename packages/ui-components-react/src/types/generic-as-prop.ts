// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* eslint-disable jsdoc/require-jsdoc */

import type React from "react";

export interface AsProp<C extends React.ElementType> {
	as?: C | null;
}

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<
	C extends React.ElementType,
	Props = object
> = React.PropsWithChildren<Props & AsProp<C>> &
	Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropWithRef<
	C extends React.ElementType,
	Props = object
> = PolymorphicComponentProp<C, Props> & {
	ref?: PolymorphicRef<C>;
};

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
