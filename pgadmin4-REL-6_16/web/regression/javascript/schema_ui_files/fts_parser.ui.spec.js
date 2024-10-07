/////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2022, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////

import '../helper/enzyme.helper';
import { createMount } from '@material-ui/core/test-utils';
import FTSParserSchema from '../../../pgadmin/browser/server_groups/servers/databases/schemas/fts_parsers/static/js/fts_parser.ui';
import {genericBeforeEach, getCreateView, getEditView, getPropertiesView} from '../genericFunctions';

describe('FTSParserSchema', ()=>{
  let mount;
  let schemaObj = new FTSParserSchema(
    {
      prsstartList: ()=> [{ label: '', value: ''}, { label: 'lb1', value: 'val1'}],
      prstokenList: ()=> [{ label: '', value: ''}, { label: 'lb1', value: 'val1'}],
      prsendList: ()=> [{ label: '', value: ''}, { label: 'lb1', value: 'val1'}],
      prslextypeList: ()=> [{ label: '', value: ''}, { label: 'lb1', value: 'val1'}],
      prsheadlineList: ()=> [{ label: '', value: ''}, { label: 'lb1', value: 'val1'}],
      schemaList: ()=> [],
    },
    {
      schema: 123
    }
  );
  let getInitData = ()=>Promise.resolve({});

  /* Use createMount so that material ui components gets the required context */
  /* https://material-ui.com/guides/testing/#api */
  beforeAll(()=>{
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  beforeEach(()=>{
    genericBeforeEach();
  });

  it('create', ()=>{
    mount(getCreateView(schemaObj));
  });

  it('edit', ()=>{
    mount(getEditView(schemaObj, getInitData));
  });

  it('properties', ()=>{
    mount(getPropertiesView(schemaObj, getInitData));
  });
});

