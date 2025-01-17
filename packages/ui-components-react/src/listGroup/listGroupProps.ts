// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ListGroupProps as FlowbiteListGroupProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const ListGroupPropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            icon: PropTypes.func,
            active: PropTypes.bool,
            disabled: PropTypes.bool
        }))
};

/**
 * ListGroup props.
 */
 export type ListGroupProps = PropsWithChildren<
    InferProps<typeof ListGroupPropTypes> & Omit<FlowbiteListGroupProps, "color" | "label">
 >;
