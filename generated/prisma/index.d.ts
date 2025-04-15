/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Data
 *
 */
export type Data = $Result.DefaultSelection<Prisma.$DataPayload>;
/**
 * Model Sensor
 *
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const SensorType: {
    HUMIDITY: 'HUMIDITY';
    TEMPERATURE: 'TEMPERATURE';
  };

  export type SensorType = (typeof SensorType)[keyof typeof SensorType];
}

export type SensorType = $Enums.SensorType;

export const SensorType: typeof $Enums.SensorType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Data
 * const data = await prisma.data.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Data
   * const data = await prisma.data.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.data`: Exposes CRUD operations for the **Data** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Data
   * const data = await prisma.data.findMany()
   * ```
   */
  get data(): Prisma.DataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sensors
   * const sensors = await prisma.sensor.findMany()
   * ```
   */
  get sensor(): Prisma.SensorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Data: 'Data';
    Sensor: 'Sensor';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'data' | 'sensor';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Data: {
        payload: Prisma.$DataPayload<ExtArgs>;
        fields: Prisma.DataFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DataFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DataFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          findFirst: {
            args: Prisma.DataFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DataFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          findMany: {
            args: Prisma.DataFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[];
          };
          create: {
            args: Prisma.DataCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          createMany: {
            args: Prisma.DataCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DataCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[];
          };
          delete: {
            args: Prisma.DataDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          update: {
            args: Prisma.DataUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          deleteMany: {
            args: Prisma.DataDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DataUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DataUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[];
          };
          upsert: {
            args: Prisma.DataUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DataPayload>;
          };
          aggregate: {
            args: Prisma.DataAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateData>;
          };
          groupBy: {
            args: Prisma.DataGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DataGroupByOutputType>[];
          };
          count: {
            args: Prisma.DataCountArgs<ExtArgs>;
            result: $Utils.Optional<DataCountAggregateOutputType> | number;
          };
        };
      };
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>;
        fields: Prisma.SensorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>;
          };
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>;
          };
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[];
          };
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>;
          };
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SensorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[];
          };
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>;
          };
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>;
          };
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SensorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[];
          };
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>;
          };
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSensor>;
          };
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SensorGroupByOutputType>[];
          };
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>;
            result: $Utils.Optional<SensorCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    data?: DataOmit;
    sensor?: SensorOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type SensorCountOutputType
   */

  export type SensorCountOutputType = {
    data: number;
  };

  export type SensorCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    data?: boolean | SensorCountOutputTypeCountDataArgs;
  };

  // Custom InputTypes
  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SensorCountOutputType
     */
    select?: SensorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountDataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DataWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Data
   */

  export type AggregateData = {
    _count: DataCountAggregateOutputType | null;
    _avg: DataAvgAggregateOutputType | null;
    _sum: DataSumAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
  };

  export type DataAvgAggregateOutputType = {
    id: number | null;
    value: number | null;
    sensorId: number | null;
  };

  export type DataSumAggregateOutputType = {
    id: number | null;
    value: number | null;
    sensorId: number | null;
  };

  export type DataMinAggregateOutputType = {
    id: number | null;
    value: number | null;
    createdAt: Date | null;
    sensorId: number | null;
  };

  export type DataMaxAggregateOutputType = {
    id: number | null;
    value: number | null;
    createdAt: Date | null;
    sensorId: number | null;
  };

  export type DataCountAggregateOutputType = {
    id: number;
    value: number;
    createdAt: number;
    sensorId: number;
    _all: number;
  };

  export type DataAvgAggregateInputType = {
    id?: true;
    value?: true;
    sensorId?: true;
  };

  export type DataSumAggregateInputType = {
    id?: true;
    value?: true;
    sensorId?: true;
  };

  export type DataMinAggregateInputType = {
    id?: true;
    value?: true;
    createdAt?: true;
    sensorId?: true;
  };

  export type DataMaxAggregateInputType = {
    id?: true;
    value?: true;
    createdAt?: true;
    sensorId?: true;
  };

  export type DataCountAggregateInputType = {
    id?: true;
    value?: true;
    createdAt?: true;
    sensorId?: true;
    _all?: true;
  };

  export type DataAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Data to aggregate.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Data
     **/
    _count?: true | DataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DataMaxAggregateInputType;
  };

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
    [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>;
  };

  export type DataGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DataWhereInput;
    orderBy?:
      | DataOrderByWithAggregationInput
      | DataOrderByWithAggregationInput[];
    by: DataScalarFieldEnum[] | DataScalarFieldEnum;
    having?: DataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DataCountAggregateInputType | true;
    _avg?: DataAvgAggregateInputType;
    _sum?: DataSumAggregateInputType;
    _min?: DataMinAggregateInputType;
    _max?: DataMaxAggregateInputType;
  };

  export type DataGroupByOutputType = {
    id: number;
    value: number;
    createdAt: Date;
    sensorId: number;
    _count: DataCountAggregateOutputType | null;
    _avg: DataAvgAggregateOutputType | null;
    _sum: DataSumAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
  };

  type GetDataGroupByPayload<T extends DataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DataGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DataGroupByOutputType[P]>
          : GetScalarType<T[P], DataGroupByOutputType[P]>;
      }
    >
  >;

  export type DataSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      value?: boolean;
      createdAt?: boolean;
      sensorId?: boolean;
      sensor?: boolean | SensorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['data']
  >;

  export type DataSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      value?: boolean;
      createdAt?: boolean;
      sensorId?: boolean;
      sensor?: boolean | SensorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['data']
  >;

  export type DataSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      value?: boolean;
      createdAt?: boolean;
      sensorId?: boolean;
      sensor?: boolean | SensorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['data']
  >;

  export type DataSelectScalar = {
    id?: boolean;
    value?: boolean;
    createdAt?: boolean;
    sensorId?: boolean;
  };

  export type DataOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'value' | 'createdAt' | 'sensorId',
    ExtArgs['result']['data']
  >;
  export type DataInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>;
  };
  export type DataIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>;
  };
  export type DataIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>;
  };

  export type $DataPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Data';
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        value: number;
        createdAt: Date;
        sensorId: number;
      },
      ExtArgs['result']['data']
    >;
    composites: {};
  };

  type DataGetPayload<S extends boolean | null | undefined | DataDefaultArgs> =
    $Result.GetResult<Prisma.$DataPayload, S>;

  type DataCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<DataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DataCountAggregateInputType | true;
  };

  export interface DataDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Data'];
      meta: { name: 'Data' };
    };
    /**
     * Find zero or one Data that matches the filter.
     * @param {DataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataFindUniqueArgs>(
      args: SelectSubset<T, DataFindUniqueArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataFindUniqueOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DataFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataFindFirstArgs>(
      args?: SelectSubset<T, DataFindFirstArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DataFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     *
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DataFindManyArgs>(
      args?: SelectSubset<T, DataFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Data.
     * @param {DataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     *
     */
    create<T extends DataCreateArgs>(
      args: SelectSubset<T, DataCreateArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Data.
     * @param {DataCreateManyArgs} args - Arguments to create many Data.
     * @example
     * // Create many Data
     * const data = await prisma.data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DataCreateManyArgs>(
      args?: SelectSubset<T, DataCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Data and returns the data saved in the database.
     * @param {DataCreateManyAndReturnArgs} args - Arguments to create many Data.
     * @example
     * // Create many Data
     * const data = await prisma.data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Data and only return the `id`
     * const dataWithIdOnly = await prisma.data.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DataCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DataCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Data.
     * @param {DataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     *
     */
    delete<T extends DataDeleteArgs>(
      args: SelectSubset<T, DataDeleteArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Data.
     * @param {DataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DataUpdateArgs>(
      args: SelectSubset<T, DataUpdateArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Data.
     * @param {DataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DataDeleteManyArgs>(
      args?: SelectSubset<T, DataDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DataUpdateManyArgs>(
      args: SelectSubset<T, DataUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Data and returns the data updated in the database.
     * @param {DataUpdateManyAndReturnArgs} args - Arguments to update many Data.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Data and only return the `id`
     * const dataWithIdOnly = await prisma.data.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DataUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DataUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Data.
     * @param {DataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
     */
    upsert<T extends DataUpsertArgs>(
      args: SelectSubset<T, DataUpsertArgs<ExtArgs>>,
    ): Prisma__DataClient<
      $Result.GetResult<
        Prisma.$DataPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
     **/
    count<T extends DataCountArgs>(
      args?: Subset<T, DataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DataAggregateArgs>(
      args: Subset<T, DataAggregateArgs>,
    ): Prisma.PrismaPromise<GetDataAggregateType<T>>;

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends DataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataGroupByArgs['orderBy'] }
        : { orderBy?: DataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, DataGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetDataGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Data model
     */
    readonly fields: DataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SensorDefaultArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      | $Result.GetResult<
          Prisma.$SensorPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Data model
   */
  interface DataFieldRefs {
    readonly id: FieldRef<'Data', 'Int'>;
    readonly value: FieldRef<'Data', 'Float'>;
    readonly createdAt: FieldRef<'Data', 'DateTime'>;
    readonly sensorId: FieldRef<'Data', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Data findUnique
   */
  export type DataFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data findUniqueOrThrow
   */
  export type DataFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data findFirst
   */
  export type DataFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * Data findFirstOrThrow
   */
  export type DataFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * Data findMany
   */
  export type DataFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Data.
     */
    cursor?: DataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Data.
     */
    skip?: number;
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * Data create
   */
  export type DataCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * The data needed to create a Data.
     */
    data: XOR<DataCreateInput, DataUncheckedCreateInput>;
  };

  /**
   * Data createMany
   */
  export type DataCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Data.
     */
    data: DataCreateManyInput | DataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Data createManyAndReturn
   */
  export type DataCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * The data used to create many Data.
     */
    data: DataCreateManyInput | DataCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Data update
   */
  export type DataUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * The data needed to update a Data.
     */
    data: XOR<DataUpdateInput, DataUncheckedUpdateInput>;
    /**
     * Choose, which Data to update.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data updateMany
   */
  export type DataUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Data.
     */
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyInput>;
    /**
     * Filter which Data to update
     */
    where?: DataWhereInput;
    /**
     * Limit how many Data to update.
     */
    limit?: number;
  };

  /**
   * Data updateManyAndReturn
   */
  export type DataUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * The data used to update Data.
     */
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyInput>;
    /**
     * Filter which Data to update
     */
    where?: DataWhereInput;
    /**
     * Limit how many Data to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Data upsert
   */
  export type DataUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * The filter to search for the Data to update in case it exists.
     */
    where: DataWhereUniqueInput;
    /**
     * In case the Data found by the `where` argument doesn't exist, create a new Data with this data.
     */
    create: XOR<DataCreateInput, DataUncheckedCreateInput>;
    /**
     * In case the Data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataUpdateInput, DataUncheckedUpdateInput>;
  };

  /**
   * Data delete
   */
  export type DataDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    /**
     * Filter which Data to delete.
     */
    where: DataWhereUniqueInput;
  };

  /**
   * Data deleteMany
   */
  export type DataDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Data to delete
     */
    where?: DataWhereInput;
    /**
     * Limit how many Data to delete.
     */
    limit?: number;
  };

  /**
   * Data without action
   */
  export type DataDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
  };

  /**
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null;
    _avg: SensorAvgAggregateOutputType | null;
    _sum: SensorSumAggregateOutputType | null;
    _min: SensorMinAggregateOutputType | null;
    _max: SensorMaxAggregateOutputType | null;
  };

  export type SensorAvgAggregateOutputType = {
    id: number | null;
  };

  export type SensorSumAggregateOutputType = {
    id: number | null;
  };

  export type SensorMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    type: $Enums.SensorType | null;
  };

  export type SensorMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    type: $Enums.SensorType | null;
  };

  export type SensorCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    _all: number;
  };

  export type SensorAvgAggregateInputType = {
    id?: true;
  };

  export type SensorSumAggregateInputType = {
    id?: true;
  };

  export type SensorMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
  };

  export type SensorMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
  };

  export type SensorCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    _all?: true;
  };

  export type SensorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sensors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sensors
     **/
    _count?: true | SensorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SensorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SensorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SensorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SensorMaxAggregateInputType;
  };

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
    [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>;
  };

  export type SensorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SensorWhereInput;
    orderBy?:
      | SensorOrderByWithAggregationInput
      | SensorOrderByWithAggregationInput[];
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum;
    having?: SensorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SensorCountAggregateInputType | true;
    _avg?: SensorAvgAggregateInputType;
    _sum?: SensorSumAggregateInputType;
    _min?: SensorMinAggregateInputType;
    _max?: SensorMaxAggregateInputType;
  };

  export type SensorGroupByOutputType = {
    id: number;
    name: string;
    type: $Enums.SensorType;
    _count: SensorCountAggregateOutputType | null;
    _avg: SensorAvgAggregateOutputType | null;
    _sum: SensorSumAggregateOutputType | null;
    _min: SensorMinAggregateOutputType | null;
    _max: SensorMaxAggregateOutputType | null;
  };

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SensorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SensorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>;
        }
      >
    >;

  export type SensorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      data?: boolean | Sensor$dataArgs<ExtArgs>;
      _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['sensor']
  >;

  export type SensorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
    },
    ExtArgs['result']['sensor']
  >;

  export type SensorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
    },
    ExtArgs['result']['sensor']
  >;

  export type SensorSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
  };

  export type SensorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'name' | 'type', ExtArgs['result']['sensor']>;
  export type SensorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    data?: boolean | Sensor$dataArgs<ExtArgs>;
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SensorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type SensorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $SensorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Sensor';
    objects: {
      data: Prisma.$DataPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        type: $Enums.SensorType;
      },
      ExtArgs['result']['sensor']
    >;
    composites: {};
  };

  type SensorGetPayload<
    S extends boolean | null | undefined | SensorDefaultArgs,
  > = $Result.GetResult<Prisma.$SensorPayload, S>;

  type SensorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SensorCountAggregateInputType | true;
  };

  export interface SensorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Sensor'];
      meta: { name: 'Sensor' };
    };
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorFindUniqueArgs>(
      args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Sensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorFindFirstArgs>(
      args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     *
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SensorFindManyArgs>(
      args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     *
     */
    create<T extends SensorCreateArgs>(
      args: SelectSubset<T, SensorCreateArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Sensors.
     * @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SensorCreateManyArgs>(
      args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Sensors and returns the data saved in the database.
     * @param {SensorCreateManyAndReturnArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SensorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SensorCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     *
     */
    delete<T extends SensorDeleteArgs>(
      args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SensorUpdateArgs>(
      args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SensorDeleteManyArgs>(
      args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SensorUpdateManyArgs>(
      args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sensors and returns the data updated in the database.
     * @param {SensorUpdateManyAndReturnArgs} args - Arguments to update many Sensors.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Sensors and only return the `id`
     * const sensorWithIdOnly = await prisma.sensor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SensorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SensorUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
     */
    upsert<T extends SensorUpsertArgs>(
      args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>,
    ): Prisma__SensorClient<
      $Result.GetResult<
        Prisma.$SensorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
     **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SensorAggregateArgs>(
      args: Subset<T, SensorAggregateArgs>,
    ): Prisma.PrismaPromise<GetSensorAggregateType<T>>;

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSensorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Sensor model
     */
    readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    data<T extends Sensor$dataArgs<ExtArgs> = {}>(
      args?: Subset<T, Sensor$dataArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$DataPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Sensor model
   */
  interface SensorFieldRefs {
    readonly id: FieldRef<'Sensor', 'Int'>;
    readonly name: FieldRef<'Sensor', 'String'>;
    readonly type: FieldRef<'Sensor', 'SensorType'>;
  }

  // Custom InputTypes
  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput;
  };

  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput;
  };

  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sensors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[];
  };

  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sensors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[];
  };

  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sensors.
     */
    skip?: number;
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[];
  };

  /**
   * Sensor create
   */
  export type SensorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>;
  };

  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Sensor createManyAndReturn
   */
  export type SensorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Sensor update
   */
  export type SensorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>;
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput;
  };

  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>;
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput;
    /**
     * Limit how many Sensors to update.
     */
    limit?: number;
  };

  /**
   * Sensor updateManyAndReturn
   */
  export type SensorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>;
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput;
    /**
     * Limit how many Sensors to update.
     */
    limit?: number;
  };

  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput;
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>;
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>;
  };

  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput;
  };

  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput;
    /**
     * Limit how many Sensors to delete.
     */
    limit?: number;
  };

  /**
   * Sensor.data
   */
  export type Sensor$dataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Data
     */
    omit?: DataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null;
    where?: DataWhereInput;
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[];
    cursor?: DataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const DataScalarFieldEnum: {
    id: 'id';
    value: 'value';
    createdAt: 'createdAt';
    sensorId: 'sensorId';
  };

  export type DataScalarFieldEnum =
    (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum];

  export const SensorScalarFieldEnum: {
    id: 'id';
    name: 'name';
    type: 'type';
  };

  export type SensorScalarFieldEnum =
    (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'SensorType'
   */
  export type EnumSensorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'SensorType'
  >;

  /**
   * Reference to a field of type 'SensorType[]'
   */
  export type ListEnumSensorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'SensorType[]'
  >;

  /**
   * Deep Input Types
   */

  export type DataWhereInput = {
    AND?: DataWhereInput | DataWhereInput[];
    OR?: DataWhereInput[];
    NOT?: DataWhereInput | DataWhereInput[];
    id?: IntFilter<'Data'> | number;
    value?: FloatFilter<'Data'> | number;
    createdAt?: DateTimeFilter<'Data'> | Date | string;
    sensorId?: IntFilter<'Data'> | number;
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>;
  };

  export type DataOrderByWithRelationInput = {
    id?: SortOrder;
    value?: SortOrder;
    createdAt?: SortOrder;
    sensorId?: SortOrder;
    sensor?: SensorOrderByWithRelationInput;
  };

  export type DataWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: DataWhereInput | DataWhereInput[];
      OR?: DataWhereInput[];
      NOT?: DataWhereInput | DataWhereInput[];
      value?: FloatFilter<'Data'> | number;
      createdAt?: DateTimeFilter<'Data'> | Date | string;
      sensorId?: IntFilter<'Data'> | number;
      sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>;
    },
    'id'
  >;

  export type DataOrderByWithAggregationInput = {
    id?: SortOrder;
    value?: SortOrder;
    createdAt?: SortOrder;
    sensorId?: SortOrder;
    _count?: DataCountOrderByAggregateInput;
    _avg?: DataAvgOrderByAggregateInput;
    _max?: DataMaxOrderByAggregateInput;
    _min?: DataMinOrderByAggregateInput;
    _sum?: DataSumOrderByAggregateInput;
  };

  export type DataScalarWhereWithAggregatesInput = {
    AND?:
      | DataScalarWhereWithAggregatesInput
      | DataScalarWhereWithAggregatesInput[];
    OR?: DataScalarWhereWithAggregatesInput[];
    NOT?:
      | DataScalarWhereWithAggregatesInput
      | DataScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Data'> | number;
    value?: FloatWithAggregatesFilter<'Data'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Data'> | Date | string;
    sensorId?: IntWithAggregatesFilter<'Data'> | number;
  };

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[];
    OR?: SensorWhereInput[];
    NOT?: SensorWhereInput | SensorWhereInput[];
    id?: IntFilter<'Sensor'> | number;
    name?: StringFilter<'Sensor'> | string;
    type?: EnumSensorTypeFilter<'Sensor'> | $Enums.SensorType;
    data?: DataListRelationFilter;
  };

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    data?: DataOrderByRelationAggregateInput;
  };

  export type SensorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: SensorWhereInput | SensorWhereInput[];
      OR?: SensorWhereInput[];
      NOT?: SensorWhereInput | SensorWhereInput[];
      name?: StringFilter<'Sensor'> | string;
      type?: EnumSensorTypeFilter<'Sensor'> | $Enums.SensorType;
      data?: DataListRelationFilter;
    },
    'id'
  >;

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    _count?: SensorCountOrderByAggregateInput;
    _avg?: SensorAvgOrderByAggregateInput;
    _max?: SensorMaxOrderByAggregateInput;
    _min?: SensorMinOrderByAggregateInput;
    _sum?: SensorSumOrderByAggregateInput;
  };

  export type SensorScalarWhereWithAggregatesInput = {
    AND?:
      | SensorScalarWhereWithAggregatesInput
      | SensorScalarWhereWithAggregatesInput[];
    OR?: SensorScalarWhereWithAggregatesInput[];
    NOT?:
      | SensorScalarWhereWithAggregatesInput
      | SensorScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Sensor'> | number;
    name?: StringWithAggregatesFilter<'Sensor'> | string;
    type?: EnumSensorTypeWithAggregatesFilter<'Sensor'> | $Enums.SensorType;
  };

  export type DataCreateInput = {
    value: number;
    createdAt?: Date | string;
    sensor: SensorCreateNestedOneWithoutDataInput;
  };

  export type DataUncheckedCreateInput = {
    id?: number;
    value: number;
    createdAt?: Date | string;
    sensorId: number;
  };

  export type DataUpdateInput = {
    value?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sensor?: SensorUpdateOneRequiredWithoutDataNestedInput;
  };

  export type DataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    value?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sensorId?: IntFieldUpdateOperationsInput | number;
  };

  export type DataCreateManyInput = {
    id?: number;
    value: number;
    createdAt?: Date | string;
    sensorId: number;
  };

  export type DataUpdateManyMutationInput = {
    value?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    value?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sensorId?: IntFieldUpdateOperationsInput | number;
  };

  export type SensorCreateInput = {
    name: string;
    type: $Enums.SensorType;
    data?: DataCreateNestedManyWithoutSensorInput;
  };

  export type SensorUncheckedCreateInput = {
    id?: number;
    name: string;
    type: $Enums.SensorType;
    data?: DataUncheckedCreateNestedManyWithoutSensorInput;
  };

  export type SensorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    data?: DataUpdateManyWithoutSensorNestedInput;
  };

  export type SensorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
    data?: DataUncheckedUpdateManyWithoutSensorNestedInput;
  };

  export type SensorCreateManyInput = {
    id?: number;
    name: string;
    type: $Enums.SensorType;
  };

  export type SensorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
  };

  export type SensorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SensorScalarRelationFilter = {
    is?: SensorWhereInput;
    isNot?: SensorWhereInput;
  };

  export type DataCountOrderByAggregateInput = {
    id?: SortOrder;
    value?: SortOrder;
    createdAt?: SortOrder;
    sensorId?: SortOrder;
  };

  export type DataAvgOrderByAggregateInput = {
    id?: SortOrder;
    value?: SortOrder;
    sensorId?: SortOrder;
  };

  export type DataMaxOrderByAggregateInput = {
    id?: SortOrder;
    value?: SortOrder;
    createdAt?: SortOrder;
    sensorId?: SortOrder;
  };

  export type DataMinOrderByAggregateInput = {
    id?: SortOrder;
    value?: SortOrder;
    createdAt?: SortOrder;
    sensorId?: SortOrder;
  };

  export type DataSumOrderByAggregateInput = {
    id?: SortOrder;
    value?: SortOrder;
    sensorId?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumSensorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorType | EnumSensorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumSensorTypeFilter<$PrismaModel> | $Enums.SensorType;
  };

  export type DataListRelationFilter = {
    every?: DataWhereInput;
    some?: DataWhereInput;
    none?: DataWhereInput;
  };

  export type DataOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
  };

  export type SensorAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
  };

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
  };

  export type SensorSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumSensorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorType | EnumSensorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumSensorTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.SensorType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumSensorTypeFilter<$PrismaModel>;
    _max?: NestedEnumSensorTypeFilter<$PrismaModel>;
  };

  export type SensorCreateNestedOneWithoutDataInput = {
    create?: XOR<
      SensorCreateWithoutDataInput,
      SensorUncheckedCreateWithoutDataInput
    >;
    connectOrCreate?: SensorCreateOrConnectWithoutDataInput;
    connect?: SensorWhereUniqueInput;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type SensorUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<
      SensorCreateWithoutDataInput,
      SensorUncheckedCreateWithoutDataInput
    >;
    connectOrCreate?: SensorCreateOrConnectWithoutDataInput;
    upsert?: SensorUpsertWithoutDataInput;
    connect?: SensorWhereUniqueInput;
    update?: XOR<
      XOR<
        SensorUpdateToOneWithWhereWithoutDataInput,
        SensorUpdateWithoutDataInput
      >,
      SensorUncheckedUpdateWithoutDataInput
    >;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DataCreateNestedManyWithoutSensorInput = {
    create?:
      | XOR<DataCreateWithoutSensorInput, DataUncheckedCreateWithoutSensorInput>
      | DataCreateWithoutSensorInput[]
      | DataUncheckedCreateWithoutSensorInput[];
    connectOrCreate?:
      | DataCreateOrConnectWithoutSensorInput
      | DataCreateOrConnectWithoutSensorInput[];
    createMany?: DataCreateManySensorInputEnvelope;
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[];
  };

  export type DataUncheckedCreateNestedManyWithoutSensorInput = {
    create?:
      | XOR<DataCreateWithoutSensorInput, DataUncheckedCreateWithoutSensorInput>
      | DataCreateWithoutSensorInput[]
      | DataUncheckedCreateWithoutSensorInput[];
    connectOrCreate?:
      | DataCreateOrConnectWithoutSensorInput
      | DataCreateOrConnectWithoutSensorInput[];
    createMany?: DataCreateManySensorInputEnvelope;
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumSensorTypeFieldUpdateOperationsInput = {
    set?: $Enums.SensorType;
  };

  export type DataUpdateManyWithoutSensorNestedInput = {
    create?:
      | XOR<DataCreateWithoutSensorInput, DataUncheckedCreateWithoutSensorInput>
      | DataCreateWithoutSensorInput[]
      | DataUncheckedCreateWithoutSensorInput[];
    connectOrCreate?:
      | DataCreateOrConnectWithoutSensorInput
      | DataCreateOrConnectWithoutSensorInput[];
    upsert?:
      | DataUpsertWithWhereUniqueWithoutSensorInput
      | DataUpsertWithWhereUniqueWithoutSensorInput[];
    createMany?: DataCreateManySensorInputEnvelope;
    set?: DataWhereUniqueInput | DataWhereUniqueInput[];
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[];
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[];
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[];
    update?:
      | DataUpdateWithWhereUniqueWithoutSensorInput
      | DataUpdateWithWhereUniqueWithoutSensorInput[];
    updateMany?:
      | DataUpdateManyWithWhereWithoutSensorInput
      | DataUpdateManyWithWhereWithoutSensorInput[];
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[];
  };

  export type DataUncheckedUpdateManyWithoutSensorNestedInput = {
    create?:
      | XOR<DataCreateWithoutSensorInput, DataUncheckedCreateWithoutSensorInput>
      | DataCreateWithoutSensorInput[]
      | DataUncheckedCreateWithoutSensorInput[];
    connectOrCreate?:
      | DataCreateOrConnectWithoutSensorInput
      | DataCreateOrConnectWithoutSensorInput[];
    upsert?:
      | DataUpsertWithWhereUniqueWithoutSensorInput
      | DataUpsertWithWhereUniqueWithoutSensorInput[];
    createMany?: DataCreateManySensorInputEnvelope;
    set?: DataWhereUniqueInput | DataWhereUniqueInput[];
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[];
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[];
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[];
    update?:
      | DataUpdateWithWhereUniqueWithoutSensorInput
      | DataUpdateWithWhereUniqueWithoutSensorInput[];
    updateMany?:
      | DataUpdateManyWithWhereWithoutSensorInput
      | DataUpdateManyWithWhereWithoutSensorInput[];
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[];
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumSensorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorType | EnumSensorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumSensorTypeFilter<$PrismaModel> | $Enums.SensorType;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumSensorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorType | EnumSensorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SensorType[] | ListEnumSensorTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumSensorTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.SensorType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumSensorTypeFilter<$PrismaModel>;
    _max?: NestedEnumSensorTypeFilter<$PrismaModel>;
  };

  export type SensorCreateWithoutDataInput = {
    name: string;
    type: $Enums.SensorType;
  };

  export type SensorUncheckedCreateWithoutDataInput = {
    id?: number;
    name: string;
    type: $Enums.SensorType;
  };

  export type SensorCreateOrConnectWithoutDataInput = {
    where: SensorWhereUniqueInput;
    create: XOR<
      SensorCreateWithoutDataInput,
      SensorUncheckedCreateWithoutDataInput
    >;
  };

  export type SensorUpsertWithoutDataInput = {
    update: XOR<
      SensorUpdateWithoutDataInput,
      SensorUncheckedUpdateWithoutDataInput
    >;
    create: XOR<
      SensorCreateWithoutDataInput,
      SensorUncheckedCreateWithoutDataInput
    >;
    where?: SensorWhereInput;
  };

  export type SensorUpdateToOneWithWhereWithoutDataInput = {
    where?: SensorWhereInput;
    data: XOR<
      SensorUpdateWithoutDataInput,
      SensorUncheckedUpdateWithoutDataInput
    >;
  };

  export type SensorUpdateWithoutDataInput = {
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
  };

  export type SensorUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumSensorTypeFieldUpdateOperationsInput | $Enums.SensorType;
  };

  export type DataCreateWithoutSensorInput = {
    value: number;
    createdAt?: Date | string;
  };

  export type DataUncheckedCreateWithoutSensorInput = {
    id?: number;
    value: number;
    createdAt?: Date | string;
  };

  export type DataCreateOrConnectWithoutSensorInput = {
    where: DataWhereUniqueInput;
    create: XOR<
      DataCreateWithoutSensorInput,
      DataUncheckedCreateWithoutSensorInput
    >;
  };

  export type DataCreateManySensorInputEnvelope = {
    data: DataCreateManySensorInput | DataCreateManySensorInput[];
    skipDuplicates?: boolean;
  };

  export type DataUpsertWithWhereUniqueWithoutSensorInput = {
    where: DataWhereUniqueInput;
    update: XOR<
      DataUpdateWithoutSensorInput,
      DataUncheckedUpdateWithoutSensorInput
    >;
    create: XOR<
      DataCreateWithoutSensorInput,
      DataUncheckedCreateWithoutSensorInput
    >;
  };

  export type DataUpdateWithWhereUniqueWithoutSensorInput = {
    where: DataWhereUniqueInput;
    data: XOR<
      DataUpdateWithoutSensorInput,
      DataUncheckedUpdateWithoutSensorInput
    >;
  };

  export type DataUpdateManyWithWhereWithoutSensorInput = {
    where: DataScalarWhereInput;
    data: XOR<
      DataUpdateManyMutationInput,
      DataUncheckedUpdateManyWithoutSensorInput
    >;
  };

  export type DataScalarWhereInput = {
    AND?: DataScalarWhereInput | DataScalarWhereInput[];
    OR?: DataScalarWhereInput[];
    NOT?: DataScalarWhereInput | DataScalarWhereInput[];
    id?: IntFilter<'Data'> | number;
    value?: FloatFilter<'Data'> | number;
    createdAt?: DateTimeFilter<'Data'> | Date | string;
    sensorId?: IntFilter<'Data'> | number;
  };

  export type DataCreateManySensorInput = {
    id?: number;
    value: number;
    createdAt?: Date | string;
  };

  export type DataUpdateWithoutSensorInput = {
    value?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DataUncheckedUpdateWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    value?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DataUncheckedUpdateManyWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    value?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
