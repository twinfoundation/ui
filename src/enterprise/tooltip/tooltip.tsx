// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tooltip as FlowbiteTooltip } from "flowbite-react";
import React from "react";
import type { TooltipProps } from "./tooltipProps";
import { Button } from "../../core/button/button";

export const Tooltip: React.FC<TooltipProps> = ({ children, color, ...rest }) => (
    <FlowbiteTooltip {...rest}>
      <Button color={color ?? "Primary"}>{children}</Button>
    </FlowbiteTooltip>
  );
