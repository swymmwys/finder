import { connect, MapStateToProps } from "react-redux";
import { Finder, State, Gender } from "../../store/types";
import React, { FormEvent } from "react";
import { FindButton } from "../FindButton/FindButton";
import { InfoArea } from "../InfoArea/InfoArea";
import { FinderActionCreators } from "../../store/actions";

const mapStateToProps: MapStateToProps<Finder, {}, State> = state => {
  return {
    findButtonAvailable: state.finder.findButtonAvailable,
    content: state.finder.content,
    error: state.finder.error,
    progress: state.finder.progress
  };
};

const mapDispatchToProps = { findMate: FinderActionCreators.findMate };

type FinderProps = ReturnType<typeof mapStateToProps> &
  { [key in keyof typeof mapDispatchToProps]: typeof mapDispatchToProps[key] };

const FinderElement: React.FC<FinderProps> = React.memo(props => {
  const formRef = React.createRef<HTMLFormElement>();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = formRef.current!.elements as HTMLFormControlsCollection & {personGender: RadioNodeList};
    props.findMate(elements.personGender.value as Gender);
  };
  return (
    <>
      <form name="genderPicker" onSubmit={onSubmit} ref={formRef}>
        <FindButton text="Find mate" disabled={!props.findButtonAvailable} />
        <label>
          male
          <input type="radio" name="personGender" value="male" />
        </label>
        <label>
          female
          <input
            type="radio"
            defaultChecked
            name="personGender"
            value="female"
          />
        </label>
      </form>
      {props.progress && "Loading... "}
      {props.error}
      {props.content && <InfoArea content={props.content} />}
    </>
  );
});

export const FinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FinderElement);
