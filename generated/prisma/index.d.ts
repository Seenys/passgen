
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PasswordConfig
 * 
 */
export type PasswordConfig = $Result.DefaultSelection<Prisma.$PasswordConfigPayload>
/**
 * Model Password
 * 
 */
export type Password = $Result.DefaultSelection<Prisma.$PasswordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PasswordConfigs
 * const passwordConfigs = await prisma.passwordConfig.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PasswordConfigs
   * const passwordConfigs = await prisma.passwordConfig.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.passwordConfig`: Exposes CRUD operations for the **PasswordConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordConfigs
    * const passwordConfigs = await prisma.passwordConfig.findMany()
    * ```
    */
  get passwordConfig(): Prisma.PasswordConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password`: Exposes CRUD operations for the **Password** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passwords
    * const passwords = await prisma.password.findMany()
    * ```
    */
  get password(): Prisma.PasswordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PasswordConfig: 'PasswordConfig',
    Password: 'Password'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "passwordConfig" | "password"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PasswordConfig: {
        payload: Prisma.$PasswordConfigPayload<ExtArgs>
        fields: Prisma.PasswordConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>
          }
          findFirst: {
            args: Prisma.PasswordConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>
          }
          findMany: {
            args: Prisma.PasswordConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>[]
          }
          create: {
            args: Prisma.PasswordConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>
          }
          createMany: {
            args: Prisma.PasswordConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>[]
          }
          delete: {
            args: Prisma.PasswordConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>
          }
          update: {
            args: Prisma.PasswordConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>
          }
          deleteMany: {
            args: Prisma.PasswordConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>[]
          }
          upsert: {
            args: Prisma.PasswordConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordConfigPayload>
          }
          aggregate: {
            args: Prisma.PasswordConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordConfig>
          }
          groupBy: {
            args: Prisma.PasswordConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordConfigCountAggregateOutputType> | number
          }
        }
      }
      Password: {
        payload: Prisma.$PasswordPayload<ExtArgs>
        fields: Prisma.PasswordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findFirst: {
            args: Prisma.PasswordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findMany: {
            args: Prisma.PasswordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          create: {
            args: Prisma.PasswordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          createMany: {
            args: Prisma.PasswordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          delete: {
            args: Prisma.PasswordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          update: {
            args: Prisma.PasswordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          deleteMany: {
            args: Prisma.PasswordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          upsert: {
            args: Prisma.PasswordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          aggregate: {
            args: Prisma.PasswordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword>
          }
          groupBy: {
            args: Prisma.PasswordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    passwordConfig?: PasswordConfigOmit
    password?: PasswordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PasswordConfigCountOutputType
   */

  export type PasswordConfigCountOutputType = {
    passwords: number
  }

  export type PasswordConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passwords?: boolean | PasswordConfigCountOutputTypeCountPasswordsArgs
  }

  // Custom InputTypes
  /**
   * PasswordConfigCountOutputType without action
   */
  export type PasswordConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfigCountOutputType
     */
    select?: PasswordConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PasswordConfigCountOutputType without action
   */
  export type PasswordConfigCountOutputTypeCountPasswordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PasswordConfig
   */

  export type AggregatePasswordConfig = {
    _count: PasswordConfigCountAggregateOutputType | null
    _avg: PasswordConfigAvgAggregateOutputType | null
    _sum: PasswordConfigSumAggregateOutputType | null
    _min: PasswordConfigMinAggregateOutputType | null
    _max: PasswordConfigMaxAggregateOutputType | null
  }

  export type PasswordConfigAvgAggregateOutputType = {
    id: number | null
    length: number | null
  }

  export type PasswordConfigSumAggregateOutputType = {
    id: number | null
    length: number | null
  }

  export type PasswordConfigMinAggregateOutputType = {
    id: number | null
    length: number | null
    useUppercase: boolean | null
    useLowercase: boolean | null
    useNumbers: boolean | null
    useSymbols: boolean | null
  }

  export type PasswordConfigMaxAggregateOutputType = {
    id: number | null
    length: number | null
    useUppercase: boolean | null
    useLowercase: boolean | null
    useNumbers: boolean | null
    useSymbols: boolean | null
  }

  export type PasswordConfigCountAggregateOutputType = {
    id: number
    length: number
    useUppercase: number
    useLowercase: number
    useNumbers: number
    useSymbols: number
    _all: number
  }


  export type PasswordConfigAvgAggregateInputType = {
    id?: true
    length?: true
  }

  export type PasswordConfigSumAggregateInputType = {
    id?: true
    length?: true
  }

  export type PasswordConfigMinAggregateInputType = {
    id?: true
    length?: true
    useUppercase?: true
    useLowercase?: true
    useNumbers?: true
    useSymbols?: true
  }

  export type PasswordConfigMaxAggregateInputType = {
    id?: true
    length?: true
    useUppercase?: true
    useLowercase?: true
    useNumbers?: true
    useSymbols?: true
  }

  export type PasswordConfigCountAggregateInputType = {
    id?: true
    length?: true
    useUppercase?: true
    useLowercase?: true
    useNumbers?: true
    useSymbols?: true
    _all?: true
  }

  export type PasswordConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordConfig to aggregate.
     */
    where?: PasswordConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordConfigs to fetch.
     */
    orderBy?: PasswordConfigOrderByWithRelationInput | PasswordConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordConfigs
    **/
    _count?: true | PasswordConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordConfigMaxAggregateInputType
  }

  export type GetPasswordConfigAggregateType<T extends PasswordConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordConfig[P]>
      : GetScalarType<T[P], AggregatePasswordConfig[P]>
  }




  export type PasswordConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordConfigWhereInput
    orderBy?: PasswordConfigOrderByWithAggregationInput | PasswordConfigOrderByWithAggregationInput[]
    by: PasswordConfigScalarFieldEnum[] | PasswordConfigScalarFieldEnum
    having?: PasswordConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordConfigCountAggregateInputType | true
    _avg?: PasswordConfigAvgAggregateInputType
    _sum?: PasswordConfigSumAggregateInputType
    _min?: PasswordConfigMinAggregateInputType
    _max?: PasswordConfigMaxAggregateInputType
  }

  export type PasswordConfigGroupByOutputType = {
    id: number
    length: number
    useUppercase: boolean
    useLowercase: boolean
    useNumbers: boolean
    useSymbols: boolean
    _count: PasswordConfigCountAggregateOutputType | null
    _avg: PasswordConfigAvgAggregateOutputType | null
    _sum: PasswordConfigSumAggregateOutputType | null
    _min: PasswordConfigMinAggregateOutputType | null
    _max: PasswordConfigMaxAggregateOutputType | null
  }

  type GetPasswordConfigGroupByPayload<T extends PasswordConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordConfigGroupByOutputType[P]>
        }
      >
    >


  export type PasswordConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    length?: boolean
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
    passwords?: boolean | PasswordConfig$passwordsArgs<ExtArgs>
    _count?: boolean | PasswordConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordConfig"]>

  export type PasswordConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    length?: boolean
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
  }, ExtArgs["result"]["passwordConfig"]>

  export type PasswordConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    length?: boolean
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
  }, ExtArgs["result"]["passwordConfig"]>

  export type PasswordConfigSelectScalar = {
    id?: boolean
    length?: boolean
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
  }

  export type PasswordConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "length" | "useUppercase" | "useLowercase" | "useNumbers" | "useSymbols", ExtArgs["result"]["passwordConfig"]>
  export type PasswordConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passwords?: boolean | PasswordConfig$passwordsArgs<ExtArgs>
    _count?: boolean | PasswordConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PasswordConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PasswordConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PasswordConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordConfig"
    objects: {
      passwords: Prisma.$PasswordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      length: number
      useUppercase: boolean
      useLowercase: boolean
      useNumbers: boolean
      useSymbols: boolean
    }, ExtArgs["result"]["passwordConfig"]>
    composites: {}
  }

  type PasswordConfigGetPayload<S extends boolean | null | undefined | PasswordConfigDefaultArgs> = $Result.GetResult<Prisma.$PasswordConfigPayload, S>

  type PasswordConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordConfigCountAggregateInputType | true
    }

  export interface PasswordConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordConfig'], meta: { name: 'PasswordConfig' } }
    /**
     * Find zero or one PasswordConfig that matches the filter.
     * @param {PasswordConfigFindUniqueArgs} args - Arguments to find a PasswordConfig
     * @example
     * // Get one PasswordConfig
     * const passwordConfig = await prisma.passwordConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordConfigFindUniqueArgs>(args: SelectSubset<T, PasswordConfigFindUniqueArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordConfigFindUniqueOrThrowArgs} args - Arguments to find a PasswordConfig
     * @example
     * // Get one PasswordConfig
     * const passwordConfig = await prisma.passwordConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordConfigFindFirstArgs} args - Arguments to find a PasswordConfig
     * @example
     * // Get one PasswordConfig
     * const passwordConfig = await prisma.passwordConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordConfigFindFirstArgs>(args?: SelectSubset<T, PasswordConfigFindFirstArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordConfigFindFirstOrThrowArgs} args - Arguments to find a PasswordConfig
     * @example
     * // Get one PasswordConfig
     * const passwordConfig = await prisma.passwordConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordConfigs
     * const passwordConfigs = await prisma.passwordConfig.findMany()
     * 
     * // Get first 10 PasswordConfigs
     * const passwordConfigs = await prisma.passwordConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordConfigWithIdOnly = await prisma.passwordConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordConfigFindManyArgs>(args?: SelectSubset<T, PasswordConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordConfig.
     * @param {PasswordConfigCreateArgs} args - Arguments to create a PasswordConfig.
     * @example
     * // Create one PasswordConfig
     * const PasswordConfig = await prisma.passwordConfig.create({
     *   data: {
     *     // ... data to create a PasswordConfig
     *   }
     * })
     * 
     */
    create<T extends PasswordConfigCreateArgs>(args: SelectSubset<T, PasswordConfigCreateArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordConfigs.
     * @param {PasswordConfigCreateManyArgs} args - Arguments to create many PasswordConfigs.
     * @example
     * // Create many PasswordConfigs
     * const passwordConfig = await prisma.passwordConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordConfigCreateManyArgs>(args?: SelectSubset<T, PasswordConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordConfigs and returns the data saved in the database.
     * @param {PasswordConfigCreateManyAndReturnArgs} args - Arguments to create many PasswordConfigs.
     * @example
     * // Create many PasswordConfigs
     * const passwordConfig = await prisma.passwordConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordConfigs and only return the `id`
     * const passwordConfigWithIdOnly = await prisma.passwordConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordConfig.
     * @param {PasswordConfigDeleteArgs} args - Arguments to delete one PasswordConfig.
     * @example
     * // Delete one PasswordConfig
     * const PasswordConfig = await prisma.passwordConfig.delete({
     *   where: {
     *     // ... filter to delete one PasswordConfig
     *   }
     * })
     * 
     */
    delete<T extends PasswordConfigDeleteArgs>(args: SelectSubset<T, PasswordConfigDeleteArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordConfig.
     * @param {PasswordConfigUpdateArgs} args - Arguments to update one PasswordConfig.
     * @example
     * // Update one PasswordConfig
     * const passwordConfig = await prisma.passwordConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordConfigUpdateArgs>(args: SelectSubset<T, PasswordConfigUpdateArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordConfigs.
     * @param {PasswordConfigDeleteManyArgs} args - Arguments to filter PasswordConfigs to delete.
     * @example
     * // Delete a few PasswordConfigs
     * const { count } = await prisma.passwordConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordConfigDeleteManyArgs>(args?: SelectSubset<T, PasswordConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordConfigs
     * const passwordConfig = await prisma.passwordConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordConfigUpdateManyArgs>(args: SelectSubset<T, PasswordConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordConfigs and returns the data updated in the database.
     * @param {PasswordConfigUpdateManyAndReturnArgs} args - Arguments to update many PasswordConfigs.
     * @example
     * // Update many PasswordConfigs
     * const passwordConfig = await prisma.passwordConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordConfigs and only return the `id`
     * const passwordConfigWithIdOnly = await prisma.passwordConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordConfig.
     * @param {PasswordConfigUpsertArgs} args - Arguments to update or create a PasswordConfig.
     * @example
     * // Update or create a PasswordConfig
     * const passwordConfig = await prisma.passwordConfig.upsert({
     *   create: {
     *     // ... data to create a PasswordConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordConfig we want to update
     *   }
     * })
     */
    upsert<T extends PasswordConfigUpsertArgs>(args: SelectSubset<T, PasswordConfigUpsertArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordConfigCountArgs} args - Arguments to filter PasswordConfigs to count.
     * @example
     * // Count the number of PasswordConfigs
     * const count = await prisma.passwordConfig.count({
     *   where: {
     *     // ... the filter for the PasswordConfigs we want to count
     *   }
     * })
    **/
    count<T extends PasswordConfigCountArgs>(
      args?: Subset<T, PasswordConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordConfigAggregateArgs>(args: Subset<T, PasswordConfigAggregateArgs>): Prisma.PrismaPromise<GetPasswordConfigAggregateType<T>>

    /**
     * Group by PasswordConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordConfigGroupByArgs} args - Group by arguments.
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
      T extends PasswordConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordConfigGroupByArgs['orderBy'] }
        : { orderBy?: PasswordConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordConfig model
   */
  readonly fields: PasswordConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passwords<T extends PasswordConfig$passwordsArgs<ExtArgs> = {}>(args?: Subset<T, PasswordConfig$passwordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordConfig model
   */
  interface PasswordConfigFieldRefs {
    readonly id: FieldRef<"PasswordConfig", 'Int'>
    readonly length: FieldRef<"PasswordConfig", 'Int'>
    readonly useUppercase: FieldRef<"PasswordConfig", 'Boolean'>
    readonly useLowercase: FieldRef<"PasswordConfig", 'Boolean'>
    readonly useNumbers: FieldRef<"PasswordConfig", 'Boolean'>
    readonly useSymbols: FieldRef<"PasswordConfig", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PasswordConfig findUnique
   */
  export type PasswordConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * Filter, which PasswordConfig to fetch.
     */
    where: PasswordConfigWhereUniqueInput
  }

  /**
   * PasswordConfig findUniqueOrThrow
   */
  export type PasswordConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * Filter, which PasswordConfig to fetch.
     */
    where: PasswordConfigWhereUniqueInput
  }

  /**
   * PasswordConfig findFirst
   */
  export type PasswordConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * Filter, which PasswordConfig to fetch.
     */
    where?: PasswordConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordConfigs to fetch.
     */
    orderBy?: PasswordConfigOrderByWithRelationInput | PasswordConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordConfigs.
     */
    cursor?: PasswordConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordConfigs.
     */
    distinct?: PasswordConfigScalarFieldEnum | PasswordConfigScalarFieldEnum[]
  }

  /**
   * PasswordConfig findFirstOrThrow
   */
  export type PasswordConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * Filter, which PasswordConfig to fetch.
     */
    where?: PasswordConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordConfigs to fetch.
     */
    orderBy?: PasswordConfigOrderByWithRelationInput | PasswordConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordConfigs.
     */
    cursor?: PasswordConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordConfigs.
     */
    distinct?: PasswordConfigScalarFieldEnum | PasswordConfigScalarFieldEnum[]
  }

  /**
   * PasswordConfig findMany
   */
  export type PasswordConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * Filter, which PasswordConfigs to fetch.
     */
    where?: PasswordConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordConfigs to fetch.
     */
    orderBy?: PasswordConfigOrderByWithRelationInput | PasswordConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordConfigs.
     */
    cursor?: PasswordConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordConfigs.
     */
    skip?: number
    distinct?: PasswordConfigScalarFieldEnum | PasswordConfigScalarFieldEnum[]
  }

  /**
   * PasswordConfig create
   */
  export type PasswordConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordConfig.
     */
    data?: XOR<PasswordConfigCreateInput, PasswordConfigUncheckedCreateInput>
  }

  /**
   * PasswordConfig createMany
   */
  export type PasswordConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordConfigs.
     */
    data: PasswordConfigCreateManyInput | PasswordConfigCreateManyInput[]
  }

  /**
   * PasswordConfig createManyAndReturn
   */
  export type PasswordConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordConfigs.
     */
    data: PasswordConfigCreateManyInput | PasswordConfigCreateManyInput[]
  }

  /**
   * PasswordConfig update
   */
  export type PasswordConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordConfig.
     */
    data: XOR<PasswordConfigUpdateInput, PasswordConfigUncheckedUpdateInput>
    /**
     * Choose, which PasswordConfig to update.
     */
    where: PasswordConfigWhereUniqueInput
  }

  /**
   * PasswordConfig updateMany
   */
  export type PasswordConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordConfigs.
     */
    data: XOR<PasswordConfigUpdateManyMutationInput, PasswordConfigUncheckedUpdateManyInput>
    /**
     * Filter which PasswordConfigs to update
     */
    where?: PasswordConfigWhereInput
    /**
     * Limit how many PasswordConfigs to update.
     */
    limit?: number
  }

  /**
   * PasswordConfig updateManyAndReturn
   */
  export type PasswordConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * The data used to update PasswordConfigs.
     */
    data: XOR<PasswordConfigUpdateManyMutationInput, PasswordConfigUncheckedUpdateManyInput>
    /**
     * Filter which PasswordConfigs to update
     */
    where?: PasswordConfigWhereInput
    /**
     * Limit how many PasswordConfigs to update.
     */
    limit?: number
  }

  /**
   * PasswordConfig upsert
   */
  export type PasswordConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordConfig to update in case it exists.
     */
    where: PasswordConfigWhereUniqueInput
    /**
     * In case the PasswordConfig found by the `where` argument doesn't exist, create a new PasswordConfig with this data.
     */
    create: XOR<PasswordConfigCreateInput, PasswordConfigUncheckedCreateInput>
    /**
     * In case the PasswordConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordConfigUpdateInput, PasswordConfigUncheckedUpdateInput>
  }

  /**
   * PasswordConfig delete
   */
  export type PasswordConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
    /**
     * Filter which PasswordConfig to delete.
     */
    where: PasswordConfigWhereUniqueInput
  }

  /**
   * PasswordConfig deleteMany
   */
  export type PasswordConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordConfigs to delete
     */
    where?: PasswordConfigWhereInput
    /**
     * Limit how many PasswordConfigs to delete.
     */
    limit?: number
  }

  /**
   * PasswordConfig.passwords
   */
  export type PasswordConfig$passwordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    where?: PasswordWhereInput
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    cursor?: PasswordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * PasswordConfig without action
   */
  export type PasswordConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordConfig
     */
    select?: PasswordConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordConfig
     */
    omit?: PasswordConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordConfigInclude<ExtArgs> | null
  }


  /**
   * Model Password
   */

  export type AggregatePassword = {
    _count: PasswordCountAggregateOutputType | null
    _avg: PasswordAvgAggregateOutputType | null
    _sum: PasswordSumAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  export type PasswordAvgAggregateOutputType = {
    configId: number | null
  }

  export type PasswordSumAggregateOutputType = {
    configId: number | null
  }

  export type PasswordMinAggregateOutputType = {
    id: string | null
    title: string | null
    encryptedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
    configId: number | null
  }

  export type PasswordMaxAggregateOutputType = {
    id: string | null
    title: string | null
    encryptedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
    configId: number | null
  }

  export type PasswordCountAggregateOutputType = {
    id: number
    title: number
    encryptedPassword: number
    createdAt: number
    updatedAt: number
    configId: number
    _all: number
  }


  export type PasswordAvgAggregateInputType = {
    configId?: true
  }

  export type PasswordSumAggregateInputType = {
    configId?: true
  }

  export type PasswordMinAggregateInputType = {
    id?: true
    title?: true
    encryptedPassword?: true
    createdAt?: true
    updatedAt?: true
    configId?: true
  }

  export type PasswordMaxAggregateInputType = {
    id?: true
    title?: true
    encryptedPassword?: true
    createdAt?: true
    updatedAt?: true
    configId?: true
  }

  export type PasswordCountAggregateInputType = {
    id?: true
    title?: true
    encryptedPassword?: true
    createdAt?: true
    updatedAt?: true
    configId?: true
    _all?: true
  }

  export type PasswordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Password to aggregate.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passwords
    **/
    _count?: true | PasswordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordMaxAggregateInputType
  }

  export type GetPasswordAggregateType<T extends PasswordAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword[P]>
      : GetScalarType<T[P], AggregatePassword[P]>
  }




  export type PasswordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordWhereInput
    orderBy?: PasswordOrderByWithAggregationInput | PasswordOrderByWithAggregationInput[]
    by: PasswordScalarFieldEnum[] | PasswordScalarFieldEnum
    having?: PasswordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordCountAggregateInputType | true
    _avg?: PasswordAvgAggregateInputType
    _sum?: PasswordSumAggregateInputType
    _min?: PasswordMinAggregateInputType
    _max?: PasswordMaxAggregateInputType
  }

  export type PasswordGroupByOutputType = {
    id: string
    title: string
    encryptedPassword: string
    createdAt: Date
    updatedAt: Date
    configId: number
    _count: PasswordCountAggregateOutputType | null
    _avg: PasswordAvgAggregateOutputType | null
    _sum: PasswordSumAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  type GetPasswordGroupByPayload<T extends PasswordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordGroupByOutputType[P]>
        }
      >
    >


  export type PasswordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    encryptedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configId?: boolean
    config?: boolean | PasswordConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    encryptedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configId?: boolean
    config?: boolean | PasswordConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    encryptedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configId?: boolean
    config?: boolean | PasswordConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectScalar = {
    id?: boolean
    title?: boolean
    encryptedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configId?: boolean
  }

  export type PasswordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "encryptedPassword" | "createdAt" | "updatedAt" | "configId", ExtArgs["result"]["password"]>
  export type PasswordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | PasswordConfigDefaultArgs<ExtArgs>
  }
  export type PasswordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | PasswordConfigDefaultArgs<ExtArgs>
  }
  export type PasswordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | PasswordConfigDefaultArgs<ExtArgs>
  }

  export type $PasswordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Password"
    objects: {
      config: Prisma.$PasswordConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      encryptedPassword: string
      createdAt: Date
      updatedAt: Date
      configId: number
    }, ExtArgs["result"]["password"]>
    composites: {}
  }

  type PasswordGetPayload<S extends boolean | null | undefined | PasswordDefaultArgs> = $Result.GetResult<Prisma.$PasswordPayload, S>

  type PasswordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordCountAggregateInputType | true
    }

  export interface PasswordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Password'], meta: { name: 'Password' } }
    /**
     * Find zero or one Password that matches the filter.
     * @param {PasswordFindUniqueArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordFindUniqueArgs>(args: SelectSubset<T, PasswordFindUniqueArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordFindUniqueOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordFindFirstArgs>(args?: SelectSubset<T, PasswordFindFirstArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passwords
     * const passwords = await prisma.password.findMany()
     * 
     * // Get first 10 Passwords
     * const passwords = await prisma.password.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordWithIdOnly = await prisma.password.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordFindManyArgs>(args?: SelectSubset<T, PasswordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password.
     * @param {PasswordCreateArgs} args - Arguments to create a Password.
     * @example
     * // Create one Password
     * const Password = await prisma.password.create({
     *   data: {
     *     // ... data to create a Password
     *   }
     * })
     * 
     */
    create<T extends PasswordCreateArgs>(args: SelectSubset<T, PasswordCreateArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passwords.
     * @param {PasswordCreateManyArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordCreateManyArgs>(args?: SelectSubset<T, PasswordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passwords and returns the data saved in the database.
     * @param {PasswordCreateManyAndReturnArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passwords and only return the `id`
     * const passwordWithIdOnly = await prisma.password.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password.
     * @param {PasswordDeleteArgs} args - Arguments to delete one Password.
     * @example
     * // Delete one Password
     * const Password = await prisma.password.delete({
     *   where: {
     *     // ... filter to delete one Password
     *   }
     * })
     * 
     */
    delete<T extends PasswordDeleteArgs>(args: SelectSubset<T, PasswordDeleteArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password.
     * @param {PasswordUpdateArgs} args - Arguments to update one Password.
     * @example
     * // Update one Password
     * const password = await prisma.password.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordUpdateArgs>(args: SelectSubset<T, PasswordUpdateArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passwords.
     * @param {PasswordDeleteManyArgs} args - Arguments to filter Passwords to delete.
     * @example
     * // Delete a few Passwords
     * const { count } = await prisma.password.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordDeleteManyArgs>(args?: SelectSubset<T, PasswordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordUpdateManyArgs>(args: SelectSubset<T, PasswordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords and returns the data updated in the database.
     * @param {PasswordUpdateManyAndReturnArgs} args - Arguments to update many Passwords.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passwords and only return the `id`
     * const passwordWithIdOnly = await prisma.password.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password.
     * @param {PasswordUpsertArgs} args - Arguments to update or create a Password.
     * @example
     * // Update or create a Password
     * const password = await prisma.password.upsert({
     *   create: {
     *     // ... data to create a Password
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password we want to update
     *   }
     * })
     */
    upsert<T extends PasswordUpsertArgs>(args: SelectSubset<T, PasswordUpsertArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordCountArgs} args - Arguments to filter Passwords to count.
     * @example
     * // Count the number of Passwords
     * const count = await prisma.password.count({
     *   where: {
     *     // ... the filter for the Passwords we want to count
     *   }
     * })
    **/
    count<T extends PasswordCountArgs>(
      args?: Subset<T, PasswordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordAggregateArgs>(args: Subset<T, PasswordAggregateArgs>): Prisma.PrismaPromise<GetPasswordAggregateType<T>>

    /**
     * Group by Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordGroupByArgs} args - Group by arguments.
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
      T extends PasswordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordGroupByArgs['orderBy'] }
        : { orderBy?: PasswordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Password model
   */
  readonly fields: PasswordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Password.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    config<T extends PasswordConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasswordConfigDefaultArgs<ExtArgs>>): Prisma__PasswordConfigClient<$Result.GetResult<Prisma.$PasswordConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Password model
   */
  interface PasswordFieldRefs {
    readonly id: FieldRef<"Password", 'String'>
    readonly title: FieldRef<"Password", 'String'>
    readonly encryptedPassword: FieldRef<"Password", 'String'>
    readonly createdAt: FieldRef<"Password", 'DateTime'>
    readonly updatedAt: FieldRef<"Password", 'DateTime'>
    readonly configId: FieldRef<"Password", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Password findUnique
   */
  export type PasswordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password findUniqueOrThrow
   */
  export type PasswordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password findFirst
   */
  export type PasswordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password findFirstOrThrow
   */
  export type PasswordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password findMany
   */
  export type PasswordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password create
   */
  export type PasswordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to create a Password.
     */
    data: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
  }

  /**
   * Password createMany
   */
  export type PasswordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passwords.
     */
    data: PasswordCreateManyInput | PasswordCreateManyInput[]
  }

  /**
   * Password createManyAndReturn
   */
  export type PasswordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * The data used to create many Passwords.
     */
    data: PasswordCreateManyInput | PasswordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Password update
   */
  export type PasswordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to update a Password.
     */
    data: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
    /**
     * Choose, which Password to update.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password updateMany
   */
  export type PasswordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
  }

  /**
   * Password updateManyAndReturn
   */
  export type PasswordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Password upsert
   */
  export type PasswordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The filter to search for the Password to update in case it exists.
     */
    where: PasswordWhereUniqueInput
    /**
     * In case the Password found by the `where` argument doesn't exist, create a new Password with this data.
     */
    create: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
    /**
     * In case the Password was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
  }

  /**
   * Password delete
   */
  export type PasswordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter which Password to delete.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password deleteMany
   */
  export type PasswordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passwords to delete
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to delete.
     */
    limit?: number
  }

  /**
   * Password without action
   */
  export type PasswordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PasswordConfigScalarFieldEnum: {
    id: 'id',
    length: 'length',
    useUppercase: 'useUppercase',
    useLowercase: 'useLowercase',
    useNumbers: 'useNumbers',
    useSymbols: 'useSymbols'
  };

  export type PasswordConfigScalarFieldEnum = (typeof PasswordConfigScalarFieldEnum)[keyof typeof PasswordConfigScalarFieldEnum]


  export const PasswordScalarFieldEnum: {
    id: 'id',
    title: 'title',
    encryptedPassword: 'encryptedPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    configId: 'configId'
  };

  export type PasswordScalarFieldEnum = (typeof PasswordScalarFieldEnum)[keyof typeof PasswordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PasswordConfigWhereInput = {
    AND?: PasswordConfigWhereInput | PasswordConfigWhereInput[]
    OR?: PasswordConfigWhereInput[]
    NOT?: PasswordConfigWhereInput | PasswordConfigWhereInput[]
    id?: IntFilter<"PasswordConfig"> | number
    length?: IntFilter<"PasswordConfig"> | number
    useUppercase?: BoolFilter<"PasswordConfig"> | boolean
    useLowercase?: BoolFilter<"PasswordConfig"> | boolean
    useNumbers?: BoolFilter<"PasswordConfig"> | boolean
    useSymbols?: BoolFilter<"PasswordConfig"> | boolean
    passwords?: PasswordListRelationFilter
  }

  export type PasswordConfigOrderByWithRelationInput = {
    id?: SortOrder
    length?: SortOrder
    useUppercase?: SortOrder
    useLowercase?: SortOrder
    useNumbers?: SortOrder
    useSymbols?: SortOrder
    passwords?: PasswordOrderByRelationAggregateInput
  }

  export type PasswordConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PasswordConfigWhereInput | PasswordConfigWhereInput[]
    OR?: PasswordConfigWhereInput[]
    NOT?: PasswordConfigWhereInput | PasswordConfigWhereInput[]
    length?: IntFilter<"PasswordConfig"> | number
    useUppercase?: BoolFilter<"PasswordConfig"> | boolean
    useLowercase?: BoolFilter<"PasswordConfig"> | boolean
    useNumbers?: BoolFilter<"PasswordConfig"> | boolean
    useSymbols?: BoolFilter<"PasswordConfig"> | boolean
    passwords?: PasswordListRelationFilter
  }, "id">

  export type PasswordConfigOrderByWithAggregationInput = {
    id?: SortOrder
    length?: SortOrder
    useUppercase?: SortOrder
    useLowercase?: SortOrder
    useNumbers?: SortOrder
    useSymbols?: SortOrder
    _count?: PasswordConfigCountOrderByAggregateInput
    _avg?: PasswordConfigAvgOrderByAggregateInput
    _max?: PasswordConfigMaxOrderByAggregateInput
    _min?: PasswordConfigMinOrderByAggregateInput
    _sum?: PasswordConfigSumOrderByAggregateInput
  }

  export type PasswordConfigScalarWhereWithAggregatesInput = {
    AND?: PasswordConfigScalarWhereWithAggregatesInput | PasswordConfigScalarWhereWithAggregatesInput[]
    OR?: PasswordConfigScalarWhereWithAggregatesInput[]
    NOT?: PasswordConfigScalarWhereWithAggregatesInput | PasswordConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordConfig"> | number
    length?: IntWithAggregatesFilter<"PasswordConfig"> | number
    useUppercase?: BoolWithAggregatesFilter<"PasswordConfig"> | boolean
    useLowercase?: BoolWithAggregatesFilter<"PasswordConfig"> | boolean
    useNumbers?: BoolWithAggregatesFilter<"PasswordConfig"> | boolean
    useSymbols?: BoolWithAggregatesFilter<"PasswordConfig"> | boolean
  }

  export type PasswordWhereInput = {
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    id?: StringFilter<"Password"> | string
    title?: StringFilter<"Password"> | string
    encryptedPassword?: StringFilter<"Password"> | string
    createdAt?: DateTimeFilter<"Password"> | Date | string
    updatedAt?: DateTimeFilter<"Password"> | Date | string
    configId?: IntFilter<"Password"> | number
    config?: XOR<PasswordConfigScalarRelationFilter, PasswordConfigWhereInput>
  }

  export type PasswordOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    encryptedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configId?: SortOrder
    config?: PasswordConfigOrderByWithRelationInput
  }

  export type PasswordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    title?: StringFilter<"Password"> | string
    encryptedPassword?: StringFilter<"Password"> | string
    createdAt?: DateTimeFilter<"Password"> | Date | string
    updatedAt?: DateTimeFilter<"Password"> | Date | string
    configId?: IntFilter<"Password"> | number
    config?: XOR<PasswordConfigScalarRelationFilter, PasswordConfigWhereInput>
  }, "id">

  export type PasswordOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    encryptedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configId?: SortOrder
    _count?: PasswordCountOrderByAggregateInput
    _avg?: PasswordAvgOrderByAggregateInput
    _max?: PasswordMaxOrderByAggregateInput
    _min?: PasswordMinOrderByAggregateInput
    _sum?: PasswordSumOrderByAggregateInput
  }

  export type PasswordScalarWhereWithAggregatesInput = {
    AND?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    OR?: PasswordScalarWhereWithAggregatesInput[]
    NOT?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Password"> | string
    title?: StringWithAggregatesFilter<"Password"> | string
    encryptedPassword?: StringWithAggregatesFilter<"Password"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Password"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Password"> | Date | string
    configId?: IntWithAggregatesFilter<"Password"> | number
  }

  export type PasswordConfigCreateInput = {
    id?: number
    length?: number
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
    passwords?: PasswordCreateNestedManyWithoutConfigInput
  }

  export type PasswordConfigUncheckedCreateInput = {
    id?: number
    length?: number
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
    passwords?: PasswordUncheckedCreateNestedManyWithoutConfigInput
  }

  export type PasswordConfigUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    useUppercase?: BoolFieldUpdateOperationsInput | boolean
    useLowercase?: BoolFieldUpdateOperationsInput | boolean
    useNumbers?: BoolFieldUpdateOperationsInput | boolean
    useSymbols?: BoolFieldUpdateOperationsInput | boolean
    passwords?: PasswordUpdateManyWithoutConfigNestedInput
  }

  export type PasswordConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    useUppercase?: BoolFieldUpdateOperationsInput | boolean
    useLowercase?: BoolFieldUpdateOperationsInput | boolean
    useNumbers?: BoolFieldUpdateOperationsInput | boolean
    useSymbols?: BoolFieldUpdateOperationsInput | boolean
    passwords?: PasswordUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type PasswordConfigCreateManyInput = {
    id?: number
    length?: number
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
  }

  export type PasswordConfigUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    useUppercase?: BoolFieldUpdateOperationsInput | boolean
    useLowercase?: BoolFieldUpdateOperationsInput | boolean
    useNumbers?: BoolFieldUpdateOperationsInput | boolean
    useSymbols?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    useUppercase?: BoolFieldUpdateOperationsInput | boolean
    useLowercase?: BoolFieldUpdateOperationsInput | boolean
    useNumbers?: BoolFieldUpdateOperationsInput | boolean
    useSymbols?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordCreateInput = {
    id?: string
    title: string
    encryptedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    config?: PasswordConfigCreateNestedOneWithoutPasswordsInput
  }

  export type PasswordUncheckedCreateInput = {
    id?: string
    title: string
    encryptedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configId?: number
  }

  export type PasswordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: PasswordConfigUpdateOneRequiredWithoutPasswordsNestedInput
  }

  export type PasswordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configId?: IntFieldUpdateOperationsInput | number
  }

  export type PasswordCreateManyInput = {
    id?: string
    title: string
    encryptedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configId?: number
  }

  export type PasswordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PasswordListRelationFilter = {
    every?: PasswordWhereInput
    some?: PasswordWhereInput
    none?: PasswordWhereInput
  }

  export type PasswordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordConfigCountOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    useUppercase?: SortOrder
    useLowercase?: SortOrder
    useNumbers?: SortOrder
    useSymbols?: SortOrder
  }

  export type PasswordConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
  }

  export type PasswordConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    useUppercase?: SortOrder
    useLowercase?: SortOrder
    useNumbers?: SortOrder
    useSymbols?: SortOrder
  }

  export type PasswordConfigMinOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    useUppercase?: SortOrder
    useLowercase?: SortOrder
    useNumbers?: SortOrder
    useSymbols?: SortOrder
  }

  export type PasswordConfigSumOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PasswordConfigScalarRelationFilter = {
    is?: PasswordConfigWhereInput
    isNot?: PasswordConfigWhereInput
  }

  export type PasswordCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    encryptedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configId?: SortOrder
  }

  export type PasswordAvgOrderByAggregateInput = {
    configId?: SortOrder
  }

  export type PasswordMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    encryptedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configId?: SortOrder
  }

  export type PasswordMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    encryptedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configId?: SortOrder
  }

  export type PasswordSumOrderByAggregateInput = {
    configId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PasswordCreateNestedManyWithoutConfigInput = {
    create?: XOR<PasswordCreateWithoutConfigInput, PasswordUncheckedCreateWithoutConfigInput> | PasswordCreateWithoutConfigInput[] | PasswordUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PasswordCreateOrConnectWithoutConfigInput | PasswordCreateOrConnectWithoutConfigInput[]
    createMany?: PasswordCreateManyConfigInputEnvelope
    connect?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
  }

  export type PasswordUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<PasswordCreateWithoutConfigInput, PasswordUncheckedCreateWithoutConfigInput> | PasswordCreateWithoutConfigInput[] | PasswordUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PasswordCreateOrConnectWithoutConfigInput | PasswordCreateOrConnectWithoutConfigInput[]
    createMany?: PasswordCreateManyConfigInputEnvelope
    connect?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PasswordUpdateManyWithoutConfigNestedInput = {
    create?: XOR<PasswordCreateWithoutConfigInput, PasswordUncheckedCreateWithoutConfigInput> | PasswordCreateWithoutConfigInput[] | PasswordUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PasswordCreateOrConnectWithoutConfigInput | PasswordCreateOrConnectWithoutConfigInput[]
    upsert?: PasswordUpsertWithWhereUniqueWithoutConfigInput | PasswordUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: PasswordCreateManyConfigInputEnvelope
    set?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    disconnect?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    delete?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    connect?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    update?: PasswordUpdateWithWhereUniqueWithoutConfigInput | PasswordUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: PasswordUpdateManyWithWhereWithoutConfigInput | PasswordUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: PasswordScalarWhereInput | PasswordScalarWhereInput[]
  }

  export type PasswordUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<PasswordCreateWithoutConfigInput, PasswordUncheckedCreateWithoutConfigInput> | PasswordCreateWithoutConfigInput[] | PasswordUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PasswordCreateOrConnectWithoutConfigInput | PasswordCreateOrConnectWithoutConfigInput[]
    upsert?: PasswordUpsertWithWhereUniqueWithoutConfigInput | PasswordUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: PasswordCreateManyConfigInputEnvelope
    set?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    disconnect?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    delete?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    connect?: PasswordWhereUniqueInput | PasswordWhereUniqueInput[]
    update?: PasswordUpdateWithWhereUniqueWithoutConfigInput | PasswordUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: PasswordUpdateManyWithWhereWithoutConfigInput | PasswordUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: PasswordScalarWhereInput | PasswordScalarWhereInput[]
  }

  export type PasswordConfigCreateNestedOneWithoutPasswordsInput = {
    create?: XOR<PasswordConfigCreateWithoutPasswordsInput, PasswordConfigUncheckedCreateWithoutPasswordsInput>
    connectOrCreate?: PasswordConfigCreateOrConnectWithoutPasswordsInput
    connect?: PasswordConfigWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PasswordConfigUpdateOneRequiredWithoutPasswordsNestedInput = {
    create?: XOR<PasswordConfigCreateWithoutPasswordsInput, PasswordConfigUncheckedCreateWithoutPasswordsInput>
    connectOrCreate?: PasswordConfigCreateOrConnectWithoutPasswordsInput
    upsert?: PasswordConfigUpsertWithoutPasswordsInput
    connect?: PasswordConfigWhereUniqueInput
    update?: XOR<XOR<PasswordConfigUpdateToOneWithWhereWithoutPasswordsInput, PasswordConfigUpdateWithoutPasswordsInput>, PasswordConfigUncheckedUpdateWithoutPasswordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PasswordCreateWithoutConfigInput = {
    id?: string
    title: string
    encryptedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordUncheckedCreateWithoutConfigInput = {
    id?: string
    title: string
    encryptedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordCreateOrConnectWithoutConfigInput = {
    where: PasswordWhereUniqueInput
    create: XOR<PasswordCreateWithoutConfigInput, PasswordUncheckedCreateWithoutConfigInput>
  }

  export type PasswordCreateManyConfigInputEnvelope = {
    data: PasswordCreateManyConfigInput | PasswordCreateManyConfigInput[]
  }

  export type PasswordUpsertWithWhereUniqueWithoutConfigInput = {
    where: PasswordWhereUniqueInput
    update: XOR<PasswordUpdateWithoutConfigInput, PasswordUncheckedUpdateWithoutConfigInput>
    create: XOR<PasswordCreateWithoutConfigInput, PasswordUncheckedCreateWithoutConfigInput>
  }

  export type PasswordUpdateWithWhereUniqueWithoutConfigInput = {
    where: PasswordWhereUniqueInput
    data: XOR<PasswordUpdateWithoutConfigInput, PasswordUncheckedUpdateWithoutConfigInput>
  }

  export type PasswordUpdateManyWithWhereWithoutConfigInput = {
    where: PasswordScalarWhereInput
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyWithoutConfigInput>
  }

  export type PasswordScalarWhereInput = {
    AND?: PasswordScalarWhereInput | PasswordScalarWhereInput[]
    OR?: PasswordScalarWhereInput[]
    NOT?: PasswordScalarWhereInput | PasswordScalarWhereInput[]
    id?: StringFilter<"Password"> | string
    title?: StringFilter<"Password"> | string
    encryptedPassword?: StringFilter<"Password"> | string
    createdAt?: DateTimeFilter<"Password"> | Date | string
    updatedAt?: DateTimeFilter<"Password"> | Date | string
    configId?: IntFilter<"Password"> | number
  }

  export type PasswordConfigCreateWithoutPasswordsInput = {
    id?: number
    length?: number
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
  }

  export type PasswordConfigUncheckedCreateWithoutPasswordsInput = {
    id?: number
    length?: number
    useUppercase?: boolean
    useLowercase?: boolean
    useNumbers?: boolean
    useSymbols?: boolean
  }

  export type PasswordConfigCreateOrConnectWithoutPasswordsInput = {
    where: PasswordConfigWhereUniqueInput
    create: XOR<PasswordConfigCreateWithoutPasswordsInput, PasswordConfigUncheckedCreateWithoutPasswordsInput>
  }

  export type PasswordConfigUpsertWithoutPasswordsInput = {
    update: XOR<PasswordConfigUpdateWithoutPasswordsInput, PasswordConfigUncheckedUpdateWithoutPasswordsInput>
    create: XOR<PasswordConfigCreateWithoutPasswordsInput, PasswordConfigUncheckedCreateWithoutPasswordsInput>
    where?: PasswordConfigWhereInput
  }

  export type PasswordConfigUpdateToOneWithWhereWithoutPasswordsInput = {
    where?: PasswordConfigWhereInput
    data: XOR<PasswordConfigUpdateWithoutPasswordsInput, PasswordConfigUncheckedUpdateWithoutPasswordsInput>
  }

  export type PasswordConfigUpdateWithoutPasswordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    useUppercase?: BoolFieldUpdateOperationsInput | boolean
    useLowercase?: BoolFieldUpdateOperationsInput | boolean
    useNumbers?: BoolFieldUpdateOperationsInput | boolean
    useSymbols?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordConfigUncheckedUpdateWithoutPasswordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    useUppercase?: BoolFieldUpdateOperationsInput | boolean
    useLowercase?: BoolFieldUpdateOperationsInput | boolean
    useNumbers?: BoolFieldUpdateOperationsInput | boolean
    useSymbols?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordCreateManyConfigInput = {
    id?: string
    title: string
    encryptedPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}