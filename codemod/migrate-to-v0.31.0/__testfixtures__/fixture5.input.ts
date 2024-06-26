import { never, object, string, tuple, unknown } from 'valibot';

const LooseObjectSchema = object({ key: string() }, unknown());
const LooseTupleSchema = tuple([string()], unknown());
const StrictObjectSchema = object({ key: string() }, never());
const StrictTupleSchema = tuple([string()], never());
