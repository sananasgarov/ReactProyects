import React from "react";
import lol from "../../../assets/img/lol.jpg";
import stray from "../../../assets/img/stray.jpg";
import NewsPhoto from "../../../assets/img/newsphoto.jpg";
function NewsInformation() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-[50px] items-start justify-between max-w-[1320px] mx-auto">
      <div className="space-y-12">
        <div className="space-y-6">
          <div>
            <img src={lol} alt="" className="rounded-xl" />
            <br />
            <div className="flex items-center gap-[20px]">
              <span className="bg-[#2351F5] py-[15px] px-[30px]">John smash</span>
              <span>.5min</span>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-[32px]">
              Lorem Ipsum is simply dummy text dummy text{" "}
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>
        <hr className="text-[#A5A5A5]" />
        <div className="space-y-6">
          <div>
            <img src={stray} alt="" className="rounded-xl" />
            <br />
            <div className="flex items-center gap-[20px]">
              <span className="bg-[#2351F5] py-[15px] px-[30px]">John smash</span>
              <span>.5min</span>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-[32px]">
              Lorem Ipsum is simply dummy text dummy text{" "}
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-12">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8">
          <div>
            <img src={NewsPhoto} alt="" className="rounded-2xl"/>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="bg-[#FF8484] py-[10px] px-[30px]">John smash</p>
              <p>.5min</p>
            </div>
            <div>
              <p className="font-bold text-[23px]">Lorem Ipsum is simply dummy text dummy text ? </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8">
          <div>
            <img src={NewsPhoto} alt="" className="rounded-2xl"/>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="bg-[#FF8484] py-[10px] px-[30px]">John smash</p>
              <p>.5min</p>
            </div>
            <div>
              <p className="font-bold text-[23px]">Lorem Ipsum is simply dummy text dummy text ? </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8">
          <div>
            <img src={NewsPhoto} alt="" className="rounded-2xl"/>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="bg-[#FF8484] py-[10px] px-[30px]">John smash</p>
              <p>.5min</p>
            </div>
            <div>
              <p className="font-bold text-[23px]">Lorem Ipsum is simply dummy text dummy text ? </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8">
          <div>
            <img src={NewsPhoto} alt="" className="rounded-2xl"/>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="bg-[#FF8484] py-[10px] px-[30px]">John smash</p>
              <p>.5min</p>
            </div>
            <div>
              <p className="font-bold text-[23px]">Lorem Ipsum is simply dummy text dummy text ? </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8">
          <div>
            <img src={NewsPhoto} alt="" className="rounded-2xl"/>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="bg-[#FF8484] py-[10px] px-[30px]">John smash</p>
              <p>.5min</p>
            </div>
            <div>
              <p className="font-bold text-[23px]">Lorem Ipsum is simply dummy text dummy text ? </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8">
          <div>
            <img src={NewsPhoto} alt="" className="rounded-2xl"/>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="bg-[#FF8484] py-[10px] px-[30px]">John smash</p>
              <p>.5min</p>
            </div>
            <div>
              <p className="font-bold text-[23px]">Lorem Ipsum is simply dummy text dummy text ? </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8">
          <div>
            <img src={NewsPhoto} alt="" className="rounded-2xl"/>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="bg-[#FF8484] py-[10px] px-[30px]">John smash</p>
              <p>.5min</p>
            </div>
            <div>
              <p className="font-bold text-[23px]">Lorem Ipsum is simply dummy text dummy text ? </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsInformation;
