import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {App} from "app/App";
import {BrowserRouterDecorator, ReduxStoreProviderDecorator} from "app/ReduxStoreProviderDecorator";


export default {
  title: 'TODOLIST/App',
  component: App,
  decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator]
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args}/>;

export const AppStory = Template.bind({});

AppStory.args = {
  demo: true
}

