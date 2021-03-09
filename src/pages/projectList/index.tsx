import React, { useState, useEffect } from "react";
import SearchPanel from "../projectList/SearchPanel";
import List from "../projectList/List";
import { IUsers, IProjects } from '../projectList/interface/stateInterface'
import { cleanObj } from 'utils'
import  * as qs from 'qs'
const apiUrl = process.env.REACT_APP_API_URL

const Index = () => {
  const [param, setParam] = useState<IUsers>({
    id: 1,
    name: "",
  });
  const [users, setUsers] = useState<IUsers[]>([]);
  const [list, setList] = useState<IProjects []>([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(param))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]); 
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, [])
  return (
    <>
      <SearchPanel param={param} setParam={setParam} users={users}/>
      <List list={list} users={users}/>
    </>
  );
};

export default Index;
