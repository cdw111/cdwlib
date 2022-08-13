import React from "react";
import classNames from "classnames";

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disable?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>//Partial可选
//storybook可以根据注解生成  解释文字的渲染

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ### 引用方法
 * 
 * ```javascript
 * import { Button } from 'cdwlib'
 * ```
 * 
 */
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disable,
        size,
        children,
        href,
        ...restProps
    } = props;
    //btn,btn-lg,btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disable': (btnType === "link") && disable
    })
    if(btnType === "link" && href) {
        return (
            <a className={classes} href={href} {...restProps}>{children}</a>
        )
    }else {
        return (
            <button className={classes} disabled={disable} {...restProps}>{children}</button>
        )
    }
}

Button.defaultProps = {
    disable: false,
    btnType: "default"
}


export default Button