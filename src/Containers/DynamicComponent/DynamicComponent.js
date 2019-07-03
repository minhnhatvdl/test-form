import React, { Fragment } from "react";
import Input from "../../Components/Input/Input";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Form from "../../Components/Form/Form";
import Table from "../../Components/Table/Table";
// HOCs
import { withHandleChange } from "../../HOCs/withHandleChange";
import { withAddFirstOption } from "../../HOCs/withAddFirstOption";
import { withSetValue } from "../../HOCs/withSetValue";
import { withListUser } from "../../HOCs/withListUser";
import { withForm } from "../../HOCs/withForm";

const DynamicComponent = ({ ...props }) => {
  const { component_identifier, children } = props;
  // form
  const FormWithDynamicStates = withForm(Form);
  // dropdown
  const DropdownWithHandleChangeCity = withHandleChange(
    withAddFirstOption(Dropdown)
  );
  // input
  const InputWithHandleChange = withHandleChange(withSetValue(Input));
  // table
  const TableWithListUser = withListUser(Table);
  // swith component
  const switchComponent = () => {
    switch (component_identifier) {
      case "search":
        return <InputWithHandleChange {...props} />;
      case "dropdown":
        return <DropdownWithHandleChangeCity {...props} />;
      case "form":
        return <FormWithDynamicStates {...props} />;
      case "table":
        return <TableWithListUser {...props} />;
      default:
        return (
          <Fragment>
            {Array.isArray(children) &&
              children.length > 0 &&
              children.map(component => (
                <DynamicComponent
                  key={component.component_identifier}
                  {...component}
                />
              ))}
          </Fragment>
        );
    }
  };
  return switchComponent();
};

export default React.memo(DynamicComponent);
