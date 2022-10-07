import Button from "../components/UI/Button";
import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		className: {
			description: 'Supports tailwind markup',
			name: 'tailwind style',
		},
		children: {
			name: 'label',
			description: 'The name of the button',
			defaultValue: '',
		}
	}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Default = Template.bind({});

Default.args = {
	children: 'click me',
}




