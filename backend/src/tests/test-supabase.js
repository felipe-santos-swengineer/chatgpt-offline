import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function test() {
  const { data, error } = await supabase
    .from('projects')
    .select('*');

  if (error) {
    console.error('Erro:', error);
  } else {
    console.log('Sucesso:', data);
  }
}

test();