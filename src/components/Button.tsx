import React, {AnchorHTMLAttributes} from 'react';
import styled from 'styled-components';
import {LoadingSpinner} from './LoadingSpinner';

export interface ButtonProps extends AnchorHTMLAttributes<any> {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  type: 'primary' | 'neutral' | 'secondary';
}

const StyledSpan = styled.span`
  left: '50%';
  top: '50%';
  margin-left: -24 / 2;
  margin-top: -24 / 2;
`;

const Button = (
  props: ButtonProps,
  ref: React.Ref<HTMLAnchorElement> | undefined,
) => {
  const {
    children,
    disabled,
    href: _href,
    loading,
    onClick: _onClick,
    type,
    ...aProps
  } = props;

  const href = disabled || loading ? 'javascript:void(0)' : _href;
  const onClick = disabled || loading ? undefined : _onClick;

  if (loading) {
    return (
      <a ref={ref} href={href}>
        <span>{children}</span>
        <StyledSpan>
          <LoadingSpinner />
        </StyledSpan>
      </a>
    );
  }

  return href && href.startsWith('/') ? (
    <a href={href}>
      {children}
    </a>
  ) : (
    <a
      {...aProps}
      ref={ref}
      href={href}
      onClick={onClick}
      rel={aProps.target === '_blank' ? 'noopener' : undefined}
    >
      {children}
    </a>
  );
};

export default React.forwardRef(Button);
