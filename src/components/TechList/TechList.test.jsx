import React from "react";
import {render, fireEvent, cleanup} from "@testing-library/react";
import {useSelector, useDispatch} from "react-redux";
import {addTech} from "../../store/modules/techs/actions";

import TechList from "./index";

jest.mock("react-redux");

describe("TechList component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("adds a new tech in the tech list", () => {
    // const {getByText, getByTestId, getByLabelText, debug} = render(<TechList />);

    // fireEvent.change(getByLabelText("Tech"), {target: {value: "React"}});
    // fireEvent.submit(getByTestId("tech-form"));

    // debug();

    // expect(getByTestId("tech-list")).toContainElement(getByText("React"));
    // expect(getByLabelText("Tech")).toHaveValue("");
  });

  it("stores techs in local storage", () => {
    // let {getByText, getByTestId, getByLabelText} = render(<TechList />);

    // fireEvent.change(getByLabelText("Tech"), {target: {value: "React"}});
    // fireEvent.submit(getByTestId("tech-form"));

    // cleanup();

    // ({getByText, getByTestId, getByLabelText} = render(<TechList />));

    // expect(localStorage.setItem).toHaveBeenCalledWith("techs", JSON.stringify(["React"]));
    // expect(getByTestId("tech-list")).toContainElement(getByText("React"));
  });

  it("renders a tech list", () => {
    useSelector.mockImplementation(cb => cb({
      techs: ["React", "Node"]
    }));

    const {getByText, getByTestId, debug} = render(<TechList />);

    expect(getByTestId("tech-list")).toContainElement(getByText("React"));
    expect(getByTestId("tech-list")).toContainElement(getByText("Node"));

    cleanup();
  }); 

  it("adds a new tech in the state", () => {
    const {getByLabelText, getByTestId} = render(<TechList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), {target: {value: "React"}});
    fireEvent.submit(getByTestId("tech-form"));

    expect(dispatch).toHaveBeenCalledWith(addTech("React"));
  });
});