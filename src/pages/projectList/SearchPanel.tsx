import React, { useState, useEffect } from "react";
import { IUsers } from "../projectList/interface/stateInterface";

interface IProps {
  param: IUsers;
  setParam: any;
  users: IUsers[];
}
const SearchPanel = (props: IProps) => {
  const { param, setParam, users } = props;

  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(e) => {
            setParam({
              ...param,
              name: e.target.value,
            });
          }}
        />
        <select
          value={param.id}
          onChange={(e) => {
            console.log('e.target.value is --',e.target.value)
            setParam({
              ...param,
              id: e.target.value,
            });
          }}
        >
          <option value={""}>负责人</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
