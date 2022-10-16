import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryLayouts, { IPrimaryLayouts } from './PrimaryLayouts';
import { mockPrimaryLayoutsProps } from './PrimaryLayouts.mocks';

export default {
  title: 'templates/CatCard',
  component: PrimaryLayouts,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PrimaryLayouts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryLayouts> = (args) => (
  <PrimaryLayouts {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPrimaryLayoutsProps.base,
} as IPrimaryLayouts;
