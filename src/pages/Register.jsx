import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';

const Register = () => {
  const [value, setValue] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);

  const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' },
  ];

  return (
    <div>
      <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div className="text-900 font-medium text-900 text-xl mb-3">
          Profile
        </div>
        {/* <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">
          Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est
          sit amet. Egestas integer eget aliquet nibh praesent tristique magna.
        </p> */}
        <div className="surface-card p-4 shadow-2 border-round">
          <div className="grid formgrid p-fluid">
            <div className="field mb-4 col-12">
              <label htmlFor="nickname2" className="font-medium text-900">
                Nickname
              </label>
              <InputText id="nickname2" type="text" />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="bio2" className="font-medium text-900">
                Bio
              </label>
              <InputTextarea id="bio2" type="text" rows={5} autoResize />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="avatar2" className="font-medium text-900">
                Avatar
              </label>
              <div className="flex align-items-center">
                <img
                  src="assets/avatar-f-4.png"
                  alt="avatar-f-4"
                  className="mr-4"
                />
                <FileUpload
                  id="avatar2"
                  mode="basic"
                  name="avatar"
                  url="./upload.php"
                  accept="image/*"
                  maxFileSize={1000000}
                  chooseOptions={{
                    className: 'p-button-plain p-button-outlined',
                  }}
                  chooseLabel="Upload Image"
                />
              </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="email2" className="font-medium text-900">
                Email
              </label>
              <InputText id="email2" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="country2" className="font-medium text-900">
                Country
              </label>
              <Dropdown
                inputId="country2"
                options={countries}
                value={country2}
                onChange={(e) => setCountry2(e.value)}
                optionLabel="name"
                filter
                filterBy="name"
                showClear
                placeholder="Select a Country"
              />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="city2" className="font-medium text-900">
                City
              </label>
              <InputText id="city2" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="state2" className="font-medium text-900">
                State
              </label>
              <InputText id="state2" type="text" />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12">
              <label htmlFor="website2" className="font-medium text-900">
                Website
              </label>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">www</span>
                <InputText id="website2" type="text" />
              </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12">
              <label htmlFor="privacy2" className="font-medium text-900">
                Privacy
              </label>
              <div className="flex align-items-center">
                <InputSwitch
                  inputId="privacy2"
                  checked={value}
                  onChange={(e) => setValue(e.value)}
                />
                <span className="ml-2">Share my data with contacts</span>
              </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="col-12">
              <Button label="Save Changes" className="w-auto mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
