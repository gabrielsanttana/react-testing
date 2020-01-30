import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {useSelector, useDispatch} from "react-redux";

import TechList from "~/components/TechList";

jest.mock("react-redux");

describe("TechList component", () => {
  it("should render tech list", () => {
    useSelector.mockImplementation(cb => cb({
      techs: ["Node.js", "React"]
    }));

    const {getByText, getByTestId, debug} = render(<TechList />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("React"));
  });

  it("should be able to add new tech", () => {
    const {getByText, getByTestId, getByLabelText} = render(<TechList />);

    const dispatch = jest.fn();
    
    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), {target: {value: "Node.js"}});
    fireEvent.submit(getByTestId("tech-form"));

    expect(dispatch).toHaveBeenCalledWith({
      type: "ADD_TECH",
      payload: {tech: "Node.js"}
    });
  });
});     
 