import React from 'react';
import { storiesOf } from "@storybook/react";
import backgrounds from "@storybook/addon-backgrounds";

import User from './User'

storiesOf("User", module)
 .addDecorator(backgrounds([
    { name: "topbar", value: "#D60A15", default: true }]
  ))
 .add("with text", () => <User />)