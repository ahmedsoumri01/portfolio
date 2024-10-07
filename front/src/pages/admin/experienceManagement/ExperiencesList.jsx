import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { getExperiences } from "../../../service/experiencesService";
import { formatDate } from "../../../utils/Utils";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
export default function ExperiencesList() {
  const [experiences, setExperiences] = useState([]);
  const fetchExperiences = async () => {
    try {
      const data = await getExperiences();
      console.log(data);
      setExperiences(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>title</Table.HeadCell>
            <Table.HeadCell>company</Table.HeadCell>
            <Table.HeadCell>description</Table.HeadCell>
            <Table.HeadCell>location</Table.HeadCell>
            <Table.HeadCell>period</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {experiences.map((experience) => (
              <Table.Row key={experience._id}>
                <Table.Cell className="text-white">
                  {experience.title}
                </Table.Cell>
                <Table.Cell className="text-white">
                  {experience.company}
                </Table.Cell>
                <Table.Cell className="text-white">
                  {experience.description}
                </Table.Cell>
                <Table.Cell className="text-white">
                  {experience.location}
                </Table.Cell>
                <Table.Cell className="text-white flex">
                  {formatDate(experience.startDate)} -{" "}
                  {formatDate(experience.endDate)}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex justify-around items-center gap-2">
                    <Tooltip content="Edit">
                    <button className="p-3 px-4 bg-green-800 text-white font-bold rounded-md">
                        <FaEdit />
                    </button>
                    </Tooltip>
                    <Tooltip content="Delete">
                    <button className="p-3 px-4 bg-red-700 text-white font-bold rounded-md">
                        <MdDelete />
                    </button>
                    </Tooltip>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
