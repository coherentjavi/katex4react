import React from "react";
import {MathBlock} from '../Components/MathBlock';
import {Meta, StoryObj} from '@storybook/react'
import { BlockComponentProps } from "../Components/MathBlock";
import 'katex/dist/katex.min.css';


type StoryProps = BlockComponentProps;
const meta: Meta<StoryProps> = {
    component: MathBlock,
};


export default meta;

type Story = StoryObj<StoryProps>;

export const Block: Story = {
    args:{
        math: String.raw`\begin{CD}A @>a>> B \\@VbVV @AAcA \\C @= D\end{CD}`
    }
};