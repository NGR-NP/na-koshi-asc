'use client';
import { Button } from '@nextui-org/react';
import action from './action';
import { useEffect, useState } from 'react';

export default function UiPage() {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [changedData, setChangedData] = useState(false);
  const revalidate = () => {
    action();
  };
  async function fetchData() {
    const data = await fetch(
      'https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json',
    );
    setData(await data.json());
  }
  async function CurrentDataF() {
    const cdata = await fetch(
      'https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json',
    );
    setCurrentData(await cdata.json());
  }
  useEffect(() => {
    fetchData();
    CurrentDataF();
  }, []);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(currentData)) {
      setChangedData(true);
      console.log('Data and currentData do not match');
    } else setChangedData(false);
  }, [data, currentData]);
  return (
    <div className="flex flex-col gap-4 p-4">
      <pre className="bg-content1 overflow-x-scroll">
        {JSON.stringify(data, null, 2)}
      </pre>
      <div
        className={`${changedData ? 'bg-red-500' : 'bg-green-500'} px-3 py-2 w-max`}
      >
        {changedData
          ? 'Data and currentData do not match'
          : 'Data and currentData match'}
      </div>
      <Button variant="flat" onClick={fetchData}>
        check again
      </Button>
      <p className="text-center">or</p>
      <Button
        variant="flat"
        className={changedData ? 'bg-red-500' : ''}
        onClick={revalidate}
      >
        revalidate
      </Button>
    </div>
  );
}
