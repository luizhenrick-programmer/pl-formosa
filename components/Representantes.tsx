'use client';
import { useState } from 'react';
import { GROUPS } from '@/lib/data';
import { RepGroup } from './ui';

export default function Representantes() {
  const [f, setF] = useState('todos');
  const chips = [{ id: 'todos', t: 'Todos' }, ...GROUPS.map((g) => ({ id: g.id, t: g.t }))];
  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar representantes">
        {chips.map((c) => <button key={c.id} type="button" className={f === c.id ? 'on' : ''} aria-pressed={f === c.id} onClick={() => setF(c.id)}>{c.t}</button>)}
      </div>
      {GROUPS.filter((g) => f === 'todos' || g.id === f).map((g) => <RepGroup key={g.id} t={g.t} n={g.n} c={g.c} />)}
    </>
  );
}
