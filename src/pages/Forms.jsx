import React from "react";

function Forms() {
  const data = [
    {
      id: 3,
      children: [
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
      ],
    },
    {
      id: 2,
      children: [
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          subchild: [
            {
              label: "name",
              type: "radio",
              apikey: "name",
            },
            {
              label: "name",
              type: "radio",
              apikey: "name",
            },
            {
              label: "name",
              type: "radio",
              apikey: "name",
            },
          ],
          apikey: "name",
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
        {
          label: "name",
          type: "text",
          apikey: "name",
        },
      ],
    },
  ];
  return (
    <div>
      form
      {data.map((val, i) => {
        if (val.id == 3) {
          return (
            <div className="grid grid-cols-3 gap-6">
              {val.children.map((item, index) => {
                return (
                  <div>
                    <label>{item.label}</label>
                    <input type={item.type} placeholder={item.apikey} />
                  </div>
                );
              })}
            </div>
          );
        } else if (val.id === 2) {
          return (
            <div className="grid grid-cols-2 gap-6">
              {val.children.map((item, index) => {
                if (item.subchild) {
                  return (
                    <div>
                      <label>{item.label}</label>
                      <div className="flex gap-4 items-center">
                        {item.subchild.map((subitem, subi) => {
                          return (
                            <div>
                              <label>{subitem.label}</label>
                              <input
                                type={subitem.type}
                                placeholder={subitem.apikey}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <label>{item.label}</label>
                      <input type={item.type} placeholder={item.apikey} />
                    </div>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Forms;
