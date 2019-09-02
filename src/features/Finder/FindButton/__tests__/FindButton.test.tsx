import renderer from "react-test-renderer";
import { FindButton } from "../FindButton";
import React from "react";

it('renders correctly', () => {
    const findButton = renderer.create(<FindButton text="Find mate" disabled={false} />).toJSON();
    expect(findButton).toMatchSnapshot();
});