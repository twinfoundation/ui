// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Footer as FlowbiteFooter } from "flowbite-react";
import { memo, type JSX, type FC } from "react";
import type {
	FooterProps,
	FooterBrandProps,
	FooterCopyrightProps,
	FooterIconProps,
	FooterLinkProps,
	FooterLinkGroupProps,
	FooterTitleProps
} from "./footerProps";

/**
 * Footer component that provides a customizable footer structure with various sub-components.
 * Extends Flowbite's Footer component with additional functionality and styling.
 */
interface FooterComponent extends FC<FooterProps> {
	/**
	 * Brand sub-component for displaying company/brand information.
	 */
	Brand: FC<FooterBrandProps>;

	/**
	 * Copyright sub-component for displaying copyright information.
	 */
	Copyright: FC<FooterCopyrightProps>;

	/**
	 * Divider sub-component for visual separation of footer sections.
	 */
	Divider: FC;

	/**
	 * Icon sub-component for displaying icons in the footer.
	 */
	Icon: FC<FooterIconProps>;

	/**
	 * Link sub-component for navigation links.
	 */
	Link: FC<FooterLinkProps>;

	/**
	 * LinkGroup sub-component for grouping related links together.
	 */
	LinkGroup: FC<FooterLinkGroupProps>;

	/**
	 * Title sub-component for section headings.
	 */
	Title: FC<FooterTitleProps>;
}

/**
 * Footer Brand component.
 * @param props - Component props
 * @returns JSX element
 */
const Brand = memo(
	({ alt, href, name, src }: FooterBrandProps): JSX.Element => (
		<FlowbiteFooter.Brand alt={alt} href={href} name={name} src={src ?? ""} />
	)
);

Brand.displayName = "Footer.Brand";

/**
 * Footer Copyright component.
 * @param props - Component props
 * @returns JSX element
 */
const Copyright = memo(
	({ by, href, year }: FooterCopyrightProps): JSX.Element => (
		<FlowbiteFooter.Copyright by={by} href={href} year={year} />
	)
);

Copyright.displayName = "Footer.Copyright";

/**
 * Footer Divider component.
 * @returns JSX element
 */
const Divider = memo((): JSX.Element => <FlowbiteFooter.Divider />);

Divider.displayName = "Footer.Divider";

/**
 * Footer Icon component.
 * @param props - Component props
 * @returns JSX element
 */
const Icon = memo(
	({ href, icon, className, ariaLabel }: FooterIconProps): JSX.Element => (
		<FlowbiteFooter.Icon
			href={href}
			icon={icon as FC<React.ComponentProps<"svg">>}
			className={className}
			ariaLabel={ariaLabel}
		/>
	)
);

Icon.displayName = "Footer.Icon";

/**
 * Footer Link component.
 * @param props - Component props
 * @returns JSX element
 */
const Link = memo(
	({ href, children }: FooterLinkProps): JSX.Element => (
		<FlowbiteFooter.Link href={href ?? "#"}>{children}</FlowbiteFooter.Link>
	)
);

Link.displayName = "Footer.Link";

/**
 * React component for Footer.LinkGroup
 */
/**
 * Footer LinkGroup component.
 * @param props - Component props
 * @returns JSX element
 */
const LinkGroup = memo(
	({ col, children }: FooterLinkGroupProps): JSX.Element => (
		<FlowbiteFooter.LinkGroup col={col}>{children}</FlowbiteFooter.LinkGroup>
	)
);

LinkGroup.displayName = "Footer.LinkGroup";

/**
 * Footer Title component.
 * @param props - Component props
 * @returns JSX element
 */
const Title = memo(
	({ title }: FooterTitleProps): JSX.Element => <FlowbiteFooter.Title title={title} />
);

Title.displayName = "Footer.Title";

/**
 * React component for Footer base.
 */
/**
 * Footer Base component.
 * @param props - Component props
 * @returns JSX element
 */
const FooterBase = memo(
	({ body, ...rest }: FooterProps): JSX.Element => <FlowbiteFooter {...rest}>{body}</FlowbiteFooter>
);

FooterBase.displayName = "Footer";

/**
 * Footer component with sub-components.
 */
const Footer = Object.assign(FooterBase, {
	Brand,
	Copyright,
	Divider,
	Icon,
	Link,
	LinkGroup,
	Title
}) as FooterComponent;

export { Footer };
