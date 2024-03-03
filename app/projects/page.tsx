"use client";
import React, { useEffect, useState } from "react";
import data from "./data.json";

const Projects = () => {
  useEffect(() => {
    prepareData();
  }, []);

  const prepareData = () => {
    data.forEach((item) => {
      switch (item.type) {
        case 1:
          prepareHtml(item, "open");
          break;
        case 2:
          prepareHtml(item, "inprogress");
          break;
        case 3:
          prepareHtml(item, "review");
          break;
        case 4:
          prepareHtml(item, "done");
          break;
      }
    });
  };

  const prepareHtml = (item: any, dragType: string) => {
    var progress = document.getElementById(dragType);
    var html = document.createElement("div");
    html.id = item.id;
    html.innerText = item.name;
    html.className =
      "h-40 bg-[#78d5e3] flex justify-center items-center m-2 hover:drop-shadow-2xl hover:cursor-move";
    html.draggable = true;
    html.ondragstart = handleOnDrag;
    progress?.appendChild(html);
  };

  const handleOnDrag = (e: any) => {
    // sürüklenen divin id sini setledik
    e.dataTransfer.setData("widget", e.target.id);
  };

  const handleOnDrop = (e: any, dragType: string) => {
    e.preventDefault();
    e.currentTarget.classList.remove("bg-[#93dde9]");
    e.currentTarget.childNodes.forEach((child: any)=>{
      child.style.pointerEvents = "";
    });
    const widget = e.dataTransfer.getData("widget");
    const appendDiv = document.getElementById(dragType);
    if (appendDiv) appendDiv.appendChild(document.getElementById(widget)!);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    // üzerindeyken verilecek class.
    e.preventDefault();
    e.currentTarget.classList.add("bg-[#93dde9]");
    // üzerindeyken tüm child ların pointerEventini none yapıyoruz ki child ların üzerine gelince üst divdeki hover bg color u bozulmasın.
    e.currentTarget.childNodes.forEach((child: any)=>{
      child.style.pointerEvents = "none";
    });
    
  };
  const handleDragLeave = (e: React.DragEvent) => {
    // ilk etapta sürüklenen component dan ayrıldığı zaman class ını kaldır.
    e.preventDefault();
    e.currentTarget.classList.remove("bg-[#93dde9]");
    e.currentTarget.childNodes.forEach((child: any)=>{
      child.style.pointerEvents = "";
    });
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="m-20 flex gap-5 justify-center">
      <div className="flex flex-col items-center">
        <h6>Open</h6>
        <div
          id="open"
          className="w-60 min-h-160 border-2 border-[#c9eef4] p-2 hover:bg-[#d5f2f6]"
          onDrop={(e) => handleOnDrop(e, "open")}
          onDragEnter={(e)=>handleDragEnter(e)}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        />
      </div>

      <div className="flex flex-col items-center">
        <h6>In Progress</h6>
        <div
          id="inprogress"
          className="w-60 min-h-160 border-2 border-[#c9eef4] p-2 hover:bg-[#d5f2f6]"
          onDrop={(e) => handleOnDrop(e, "inprogress")}
          onDragEnter={(e)=>handleDragEnter(e)}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        />
      </div>
      <div className="flex flex-col items-center">
        <h6>Review</h6>
        <div
          id="review"
          className="w-60 min-h-160 border-2 border-[#c9eef4] p-2 hover:bg-[#d5f2f6]"
          onDrop={(e) => handleOnDrop(e, "review")}
          onDragEnter={(e)=>handleDragEnter(e)}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        />
      </div>
      <div className="flex flex-col items-center">
        <h6>Done</h6>
        <div
          id="done"
          className="w-60 min-h-160 border-2 border-[#c9eef4] p-2 hover:bg-[#d5f2f6]"
          onDrop={(e) => handleOnDrop(e, "done")}
          onDragEnter={(e)=>handleDragEnter(e)}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        />
      </div>
    </div>
  );
};

export default Projects;
